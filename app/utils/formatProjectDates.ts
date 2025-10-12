export default function (project: Project) {
  const format = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  });

  if (project.startDate.getMonth() === project.endDate.getMonth()) {
    return format.format(project.startDate);
  }

  return format.format(project.startDate) + " - " + format.format(project.endDate);
}
