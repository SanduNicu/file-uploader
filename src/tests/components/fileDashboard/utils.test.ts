import { fetchFiles } from "@components/fileDashboard/utils";

const mockedFile = { name: "File", size: 1 };

// @ts-expect-error: Global window error
window.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([mockedFile]),
  })
);

describe("File Dashboard Utils", () => {
  describe("fetchFiles", () => {
    test("should fetch files", async () => {
      const files = await fetchFiles();
      expect(files).toEqual([mockedFile]);
    });
  });
});
