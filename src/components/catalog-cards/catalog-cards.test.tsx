import { render, screen } from '@testing-library/react';
import { CatalogCards } from '.';
import { TCameraList } from '../../types/camera';
import { withHistory, withStore } from '../../utils/mock-component';

describe('Component: CatalogCards', () => {
  it('should render correct', () => {
    const expectedText = 'Ретрокамера Dus Auge lV';
    const fakeCameras: TCameraList = [
      {
        'id': 1,
        'name': 'Ретрокамера Dus Auge lV',
        'vendorCode': 'DA4IU67AD5',
        'type': 'Коллекционная',
        'category': 'Видеокамера',
        'description': 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники. Вы тоже можете прикоснуться к волшебству аналоговой съёмки, заказав этот чудо-аппарат. Кто знает, может с Das Auge IV начнётся ваш путь к наградам всех престижных кинофестивалей.',
        'previewImg': 'img/content/das-auge.jpg',
        'level': 'Любительский',
        'price': 73450,
        'previewImg2x': 'img/content/das-auge@2x.jpg',
        'previewImgWebp': 'img/content/das-auge.webp',
        'previewImgWebp2x': 'img/content/das-auge@2x.webp',
        'rating': 4,
        'reviewCount': 6
      }];

    const { withStoreComponent } = withStore(<CatalogCards cameras={fakeCameras} />, {});
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
