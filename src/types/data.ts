export interface CuriculumItem {
    id: number;
    name: string;
    description: string;
    icon: JSX.Element;
}


export interface LightgalleryImage {
    src: string;

    width: number;
    height: number;

    caption?: string;
};

export type VisiMisiItem = {

    id: number;
    desc: string;
    icon: JSX.Element;
};

export type VisiMisi = {
    title: string;
    item: VisiMisiItem[];
    type: string
};
