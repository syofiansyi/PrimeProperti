import React from "react";

type SkeletonVariant = 
  | "text" 
  | "circle"
  | "rectangle"
  | "card"
  | "image"
  | "button"
  | "input"
  | "badge";

interface UniversalSkeletonProps {
  variant?: SkeletonVariant;
  width?: number | string;
  height?: number | string;
  className?: string;
  count?: number;
  animation?: "pulse" | "wave" | "none";
}

export const UniversalSkeleton = ({
  variant = "text",
  width,
  height,
  className = "",
  count = 1,
  animation = "pulse",
}: UniversalSkeletonProps) => {
  // Base style
  const baseStyle = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  // Variant specific classes
  const variantClasses = {
    text: "h-4 rounded",
    circle: "rounded-full aspect-square",
    rectangle: "rounded",
    card: "rounded-lg overflow-hidden shadow-md",
    image: "rounded bg-gray-200",
    button: "rounded-md",
    input: "rounded h-10",
    badge: "rounded-full h-6",
  };

  // Animation classes
  const animationClasses = {
    pulse: "animate-pulse",
    wave: "animate-wave",
    none: "",
  };

  // Combine all classes
  const skeletonClass = `
    bg-gray-200 
    ${variantClasses[variant]} 
    ${animationClasses[animation]}
    ${className}
  `;

  // Render multiple skeletons if count > 1
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          className={skeletonClass.trim()}
          style={baseStyle}
          aria-label="Loading..."
        >
          {/* For image/card variants */}
          {(variant === "card" || variant === "image") && (
            <div className="w-full h-full bg-gray-300"></div>
          )}
        </div>
      ))}
    </>
  );
};

// Extra component for card skeleton with content
export const CardSkeleton = ({
  withImage = true,
  withTitle = true,
  withText = true,
  withButton = false,
  className = "",
}: {
  withImage?: boolean;
  withTitle?: boolean;
  withText?: boolean;
  withButton?: boolean;
  className?: string;
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {withImage && (
        <UniversalSkeleton 
          variant="image" 
          height={200} 
          className="w-full"
        />
      )}
      
      <div className="p-4 space-y-3">
        {withTitle && (
          <UniversalSkeleton variant="text" width="70%" className="h-6" />
        )}
        
        {withText && (
          <>
            <UniversalSkeleton variant="text" width="90%" />
            <UniversalSkeleton variant="text" width="80%" />
            <UniversalSkeleton variant="text" width="60%" />
          </>
        )}
        
        {withButton && (
          <UniversalSkeleton 
            variant="button" 
            height={40} 
            className="w-full mt-4"
          />
        )}
      </div>
    </div>
  );
};

// Extra component for product card skeleton
export const ProductCardSkeleton = () => {
  return (
    <CardSkeleton 
      withImage
      withTitle
      withText
      withButton
      className="w-[300px] h-full"
    />
  );
};