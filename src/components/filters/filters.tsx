import { CategoryBlock, LevelBlock, PriceBlock, ResetBtn, TypeBlock } from './bin';

export const Filters = () => (
  <div className='catalog__aside'>
    <div className='catalog-filter'>
      <form action='#' name='filter'>
        <h2 className='visually-hidden'>Фильтр</h2>
        <PriceBlock />
        <CategoryBlock />
        <TypeBlock />
        <LevelBlock />
        <ResetBtn />
      </form>
    </div>
  </div>
);
