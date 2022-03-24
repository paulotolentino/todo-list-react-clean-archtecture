export interface SetValue {
  set: (value: any, action: string) => Promise<void>;
}
