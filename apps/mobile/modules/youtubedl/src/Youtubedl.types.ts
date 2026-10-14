export interface DownloadResult {
  exitCode: number;
  filePath: string;
  out: string;
  err: string;
}

export interface ProgressEvent {
  processId: string;
  progress: number;
  etaSeconds: number;
}

export interface EventSubscription {
  remove(): void;
}

export interface YoutubedlModule {
  init(): Promise<boolean>;
  download(url: string, filename: string, processId: string): Promise<DownloadResult>;
  cancel(processId: string): Promise<boolean>;
  addListener(eventName: "progress", listener: (event: ProgressEvent) => void): EventSubscription;
  removeAllListeners(eventName: string): void;
}
