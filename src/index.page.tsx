export const title = "PVD Meshworks";
export const layout = "layouts/base.tsx";

export default function index({ comp }: Lume.Data, helpers: Lume.Helpers) {
  return (
    <>
    <comp.hero></comp.hero>
    </>
  );
}
