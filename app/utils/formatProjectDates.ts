export default function (project: Project) {
  const format = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  });

  if (
    project.startDate.getMonth() === project.endDate.getMonth() &&
    project.startDate.getFullYear() === project.endDate.getFullYear()
  ) {
    return format.format(project.startDate);
  }

  return format.format(project.startDate) + " - " + format.format(project.endDate);
}
