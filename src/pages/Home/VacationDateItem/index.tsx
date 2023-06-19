import { VscCalendar } from 'react-icons/vsc';

import * as S from './style';
// import * as T from './type';

interface VacationDateProps {
  season: '여름' | '겨울' | '봄';
  date: number;
}

function VacationDate({ season, date }: VacationDateProps) {
  return (
    <S.VacationDate>
      <VscCalendar /> {season}
      {'방학 D-'}
      {date}
    </S.VacationDate>
  );
}

export default VacationDate;
