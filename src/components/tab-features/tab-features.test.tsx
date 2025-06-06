import { render, screen } from '@testing-library/react';
import { TabFeaturesElement } from '.';
import { TCamera } from '../../types/camera';

describe('Component: TabFeatures', () => {
  it('should render correctly', () => {
    const expectedText = 'Артикул:';

    const fakeCamera: TCamera = {
      'id': 1,
      'name': 'Ретрокамера Dus Auge lV',
      'vendorCode': 'DA4IU67AD5',
      'type': 'Коллекционная',
      'category': 'Видеокамера',
      'description': 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники.',
      'level': 'Нулевой',
      'price': 65000,
      'rating': 5,
      'reviewCount': 16,
      'previewImg': 'img/content/das-auge.jpg',
      'previewImg2x': 'img/content/das-auge@2x.jpg',
      'previewImgWebp': 'img/content/das-auge.webp',
      'previewImgWebp2x': 'img/content/das-auge@2x.webp'
    };

    render(<TabFeaturesElement camera={fakeCamera} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
