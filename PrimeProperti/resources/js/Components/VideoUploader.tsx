// resources/js/Components/VideoUploader.tsx

import { ChangeEvent, useState } from "react";
import axios from "axios";
import { FiUpload, FiCopy, FiTrash2, FiCheck, FiX } from "react-icons/fi";
import { toast } from "react-hot-toast";

export type Video = {
    name: string;
    url: string;
    size: number;
    duration: number;
    mime_type: string;
    uploaded_at: string;
};

type Props = {
    videos: Video[];
    setVideos: React.Dispatch<React.SetStateAction<Video[]>>;
};

export default function VideoUploader({ videos, setVideos }: Props) {
    const [videoFiles, setVideoFiles] = useState<File[]>([]);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [copiedVideoName, setCopiedVideoName] = useState<string | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            setVideoFiles(prev => [...prev, ...newFiles]);
        }
    };

    const removeFile = (index: number) => {
        setVideoFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleUpload = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsUploading(true);
        setUploadProgress(0);

        if (videoFiles.length === 0) {
            toast.error("Please select at least one video file");
            setIsUploading(false);
            return;
        }

        try {
            for (const file of videoFiles) {
                const formData = new FormData();
                formData.append("video", file);

                const response = await axios.post(route("video.upload"), formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                    onUploadProgress: (event) => {
                        const percent = Math.round((event.loaded * 100) / (event.total || 1));
                        setUploadProgress(percent);
                    },
                });

                setVideos(prev => [...prev, response.data]);
            }

            setVideoFiles([]);
            toast.success("Videos uploaded successfully!");
        } catch (error) {
            toast.error("Failed to upload video(s)");
        } finally {
            setIsUploading(false);
            setUploadProgress(0);
        }
    };

    const handleDelete = async (name: string) => {
        if (!confirm("Are you sure?")) return;

        try {
            await axios.delete(route("video.delete", { filename: name }));
            setVideos(prev => prev.filter(v => v.name !== name));
            toast.success("Video deleted");
        } catch {
            toast.error("Failed to delete video");
        }
    };

    const copyVideoName = async (name: string) => {
        try {
            const url = `${window.location.origin}/storage/videos/${name}`;
            await navigator.clipboard.writeText(url);
            setCopiedVideoName(name);
            setTimeout(() => setCopiedVideoName(null), 2000);
            toast.success("Video URL copied!");
        } catch {
            toast.error("Failed to copy video URL");
        }
    };

    const formatFileSize = (bytes: number) => {
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return (bytes / Math.pow(k, i)).toFixed(2) + " " + sizes[i];
    };

    const formatDuration = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    return (
        <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Video Upload</h2>
            <form onSubmit={handleUpload} className="space-y-4">
                <div className="border-2 border-dashed p-6 text-center">
                    <FiUpload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                    <p className="text-sm text-gray-500 mb-2">
                        Drag or select multiple video files
                    </p>
                    <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                        Select Videos
                        <input
                            type="file"
                            accept="video/*"
                            multiple
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </label>
                    <p className="text-xs text-gray-500 mt-2">MP4, WebM. Max 100MB</p>
                </div>

                {videoFiles.length > 0 && (
                    <div>
                        <p className="font-semibold mb-2">Selected Videos:</p>
                        {videoFiles.map((file, i) => (
                            <div key={i} className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2">
                                <div>
                                    <p className="text-sm font-medium truncate">{file.name}</p>
                                    <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                                </div>
                                <button onClick={() => removeFile(i)} type="button" className="text-red-500 hover:text-red-700">
                                    <FiX />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {isUploading && (
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${uploadProgress}%` }}></div>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isUploading || videoFiles.length === 0}
                    className={`w-full py-2 px-4 rounded-md text-white font-medium ${
                        isUploading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
                    }`}
                >
                    {isUploading ? `Uploading... ${uploadProgress}%` : `Upload ${videoFiles.length} Video(s)`}
                </button>
            </form>

            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3">Uploaded Videos</h3>
                {videos.length === 0 ? (
                    <p className="text-gray-500">No videos uploaded yet.</p>
                ) : (
                    <div className="space-y-4">
                        {videos.map((video) => (
                            <div key={video.name} className="border rounded overflow-hidden">
                                <div className="relative pt-[56.25%] bg-black">
                                    <video controls className="absolute inset-0 w-full h-full">
                                        <source src={video.url} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="p-4 bg-white flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-sm truncate">{video.name}</p>
                                        <p className="text-xs text-gray-500">{formatFileSize(video.size)} • {formatDuration(video.duration)}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button onClick={() => copyVideoName(video.name)} title="Copy URL">
                                            {copiedVideoName === video.name ? <FiCheck className="text-green-500" /> : <FiCopy />}
                                        </button>
                                        <button onClick={() => handleDelete(video.name)} title="Delete" className="text-red-500 hover:text-red-700">
                                            <FiTrash2 />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
