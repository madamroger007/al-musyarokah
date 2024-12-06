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


export type NewsType = {
    id: number;
    img: string;
    title: string;
    date: string;
    description: string;
    author: string;
}


export type FasilitasType = {
    id: number;
    img: string;
    title: string;
}