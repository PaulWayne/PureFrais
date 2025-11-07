export type PictureBase = {
  name: string;
  url: string;
  width: number;
  height: number;
  size: number;
};
export interface Picture extends PictureBase {
  id: number;
  documentId: string;
  alternativeText: string;
  formats: {
    large: PictureBase;
    small: PictureBase;
    medium: PictureBase;
    thumbnail: PictureBase;
  };
}
