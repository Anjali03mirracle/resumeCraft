"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Minus } from "lucide-react";
import { useFormContext } from "@/lib/context/FormProvider";

const ProjectsForm = () => {
  const { formData, handleInputChange } = useFormContext();

 const [projects, setProjects] = useState<any[]>(
    formData?.projects?.length > 0
      ? formData.projects
      : [
          {
            projectName: "",
            techStack: "",
            githubLink: "",
            liveLink: "",
            description: "",
          },
        ]
  );

  useEffect(() => {
    handleInputChange({
      target: {
        name: "projects",
        value: projects,
      },
    });
  }, [projects]);

  const addProject = () => {
    setProjects([
      ...projects,
      {
        projectName: "",
        techStack: "",
        githubLink: "",
        liveLink: "",
        description: "",
      },
    ]);
  };

  const removeProject = () => {
    if (projects.length > 1) {
      setProjects(projects.slice(0, -1));
    }
  };

  const handleChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedProjects = [...projects];

    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    };

    setProjects(updatedProjects);

    handleInputChange({
      target: {
        name: "projects",
        value: updatedProjects,
      },
    });
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-4 border-blue-600 bg-white">
      <h2 className="text-xl font-bold">Projects</h2>

      <p className="text-gray-500 mb-4">
        Add your best projects
      </p>

      {projects.map((project, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 mb-4 space-y-3"
        >
          <Input
            placeholder="Project Name"
            value={project.projectName}
            onChange={(e) =>
              handleChange(
                index,
                "projectName",
                e.target.value
              )
            }
          />

          <Input
            placeholder="Tech Stack"
            value={project.techStack}
            onChange={(e) =>
              handleChange(
                index,
                "techStack",
                e.target.value
              )
            }
          />

          <Input
            placeholder="GitHub Link"
            value={project.githubLink}
            onChange={(e) =>
              handleChange(
                index,
                "githubLink",
                e.target.value
              )
            }
          />

          <Input
            placeholder="Live Project Link"
            value={project.liveLink}
            onChange={(e) =>
              handleChange(
                index,
                "liveLink",
                e.target.value
              )
            }
          />

          <textarea
            className="w-full border rounded-lg p-3"
            rows={4}
            placeholder="Describe your project..."
            value={project.description}
            onChange={(e) =>
              handleChange(
                index,
                "description",
                e.target.value
              )
            }
          />
        </div>
      ))}

      <div className="mt-5 flex justify-between">
  <div className="flex gap-2">
    <Button type="button" onClick={addProject}>
      <Plus className="mr-2 h-4 w-4" />
      Add Project
    </Button>

    <Button
      type="button"
      variant="outline"
      onClick={removeProject}
    >
      <Minus className="mr-2 h-4 w-4" />
      Remove
    </Button>
  </div>

  <Button className="bg-primary-700 text-white">
    Save
  </Button>
</div>
    </div>
  );
};

export default ProjectsForm;