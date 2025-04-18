export enum TCameraType {
	Collection = 'Коллекционная',
	Snapshot = 'Моментальная',
	Digital = 'Цифровая',
	Film = 'Плёночная',
}

export enum TCameraCategory {
	Videocamera = 'Видеокамера',
	Photocamera = 'Фотоаппарат',
}

export enum TCameraLevel {
	Zero = 'Нулевой',
	NonProfessional = 'Любительский',
	Professional = 'Профессиональный',
	All = 'Все',
}

export type TPriceFilter = {
	minPrice: number;
	maxPrice: number;
};

export type TCamera = {
	id: number;
	name: string;
	vendorCode: string;
	type: TCameraType;
	category: TCameraCategory;
	description: string;
	level: TCameraLevel;
	price: number;
	rating: number;
	reviewCount: number;
	previewImg: string;
	previewImg2x: string;
	previewImgWebp: string;
	previewImgWebp2x: string;
};

export type TCameraList = TCamera[];
