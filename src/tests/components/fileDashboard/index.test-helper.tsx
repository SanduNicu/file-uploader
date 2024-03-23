import { render } from "@testing-library/react";
import FileDashbord from "@components/fileDashboard";

vi.mock("@components/List", () => ({
  default: vi.fn(() => <div>List</div>),
}));
vi.mock("@components/FileUploader", () => ({
  default: vi.fn(() => <div>FileUploader</div>),
}));

export function renderUI() {
  render(<FileDashbord />);
}
