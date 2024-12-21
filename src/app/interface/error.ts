export type TErrorSources = {
  path: string | number;
  message: string;
}[];
export type TGenericErrorResponse = {
  message: string;
  statusCode: number;
  error: TErrorSources;
};

export type TErrorAs = { path: string | number; message: string };
