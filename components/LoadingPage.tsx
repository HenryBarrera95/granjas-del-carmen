import React from "react";

const LoadingPage = ({ isLoading = true }: { isLoading?: boolean }) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-4xl font-bold text-gray-800">Loading...</div>
      </div>
    );
  }
};

export default LoadingPage;
