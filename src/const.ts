export enum AppRoute {
	Root = '/',
	Camera = 'camera/:id',
	Everything = '*',
}

export enum PageType {
	Main = 'Main',
	Product = 'Product',
}

export const PageImageProps = {
	Main: { width: 280, height: 240 },
	Product: { width: 560, height: 480 },
};

export const SERVER_URL = 'https://camera-shop.accelerator.htmlacademy.pro';

export const TOKEN_NAME = 'x-token';

export enum SliceName {
	AppData = 'AppData',
	UserProccess = 'UserProccess',
}

export enum SortingType {
	ByPrice = 'ByPrice',
	ByPopularity = 'ByPopularity',
}

export enum OrderType {
	Descending = 'Descending',
	Ascending = 'Ascending',
}

enum Category {
	Photocamera = 'photocamera',
	Videocamera = 'videocamera',
	All = 'all',
}

enum CameraType {
	Digital = 'digital',
	Film = 'film',
	Snapshot = 'snapshot',
	Collection = 'collection',
	All = 'all',
}

enum Level {
	Zero = 'zero',
	NonProfessional = 'non-professional',
	Professional = 'professional',
	All = 'all',
}

export const Filter = {
	Category,
	CameraType,
	Level,
};
