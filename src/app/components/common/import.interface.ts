export interface ImportSettingsObject {
  clipSnippetLength: number;
  clipSnippets: number;
  exportFolderPath: string;
  hubName: string;
  imgHeight: number;
  screensPerVideo: boolean; // true = N screenshots per video; false = 1 screenshot every N minutes
  ssConstant: number;
  ssVariable: number;
  videoDirPath: string;
}
