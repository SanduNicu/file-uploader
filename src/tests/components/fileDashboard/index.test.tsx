import { renderUI } from "./index.test-helper";
import List from "../../../components/List";
import FileUploader from "@components/fileUploader";
import * as utils from "@components/fileDashboard/utils";

describe("File Dashboard", () => {
  test("should render children", () => {
    renderUI();
    expect(List).toHaveBeenCalled();
    expect(FileUploader).toHaveBeenCalled();
  });

  test("should fetch initial files", () => {
    const spy = vi.spyOn(utils, "fetchFiles");
    renderUI();
    expect(spy).toHaveBeenCalled();
  });
});
