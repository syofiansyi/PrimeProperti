import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

type Props = {
    fileUrl: string;
};

export default function PDFViewer({ fileUrl }: Props) {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div className="my-8 border rounded shadow">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <div style={{ height: '750px' }}>
                    <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
                </div>
            </Worker>
        </div>
    );
}
