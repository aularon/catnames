export default function sarref(template: string, root: string) {
  let i = 0;
  return template.replace(/[فعل]/g, () => root[i++]);
}
