import { useFormContext } from "@/lib/context/FormProvider";
import { themeColors } from "@/lib/utils";
import React from "react";

const ProjectsPreview = () => {
  const { formData } = useFormContext();

  if (!formData?.projects || formData.projects.length === 0) {
    return null;
  }

  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: formData?.themeColor || themeColors[0],
        }}
      >
        Projects
      </h2>

      <hr
        style={{
          borderColor: formData?.themeColor || themeColors[0],
        }}
      />

      {formData.projects.map((project: any, index: number) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold flex justify-between"
            style={{
              color: formData?.themeColor || themeColors[0],
            }}
          >
            <span>{project.projectName}</span>

            <span className="text-xs font-normal flex gap-3">
              {project.githubLink && (
                <span>GitHub</span>
              )}

              {project.liveLink && (
                <span>Live Project</span>
              )}
            </span>
          </h2>

        {project.techStack && (
  <p
    className="text-xs italic font-medium mt-1"
    style={{
      color: formData?.themeColor || themeColors[0],
    }}
  >
    {project.techStack}
  </p>
)}
          {project.description && (
            <p className="text-xs my-2 text-justify">
              {project.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectsPreview;