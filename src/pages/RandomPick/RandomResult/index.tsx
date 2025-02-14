import { useEffect, useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { LuLogOut } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

import SaveConditionButton from '@Pages/RandomPick/RandomSelect/SaveConditionButton';

import whitebackground from '@Assets/image/background/random-whitebg.png';
import woodbackground from '@Assets/image/background/random-woodbg.png';

import * as S from './style';
import SelectBox from '../RandomSelect/SelectBox';

function RandomPick() {
  const [chosenStudents, setChosenStudents] = useState<string[]>([]);
  // const [isWoodBackground, setIsWoodBackground] = useState(true);
  const [isWoodBackground, setIsWoodBackground] = useState<'wood' | 'white'>(
    'wood',
  );
  const toggleWoodBackground = () => {
    setIsWoodBackground('wood');
  };
  const toggleWhiteBackground = () => {
    setIsWoodBackground('white');
  };

  const navigate = useNavigate();
  const fromResultToSelect = () => {
    navigate('/tools/random-drawing');
  };

  useEffect(() => {
    fetch('/randompick/result')
      .then((response) => response.json())
      .then((data) => {
        const studentNames = Object.values(data.data) as string[];
        setChosenStudents(studentNames);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <S.Layout>
      <S.RandomResult
        backgroundImage={
          isWoodBackground == 'wood' ? woodbackground : whitebackground
        }
      >
        <S.UpDownWrapper justifyContent="space-between">
          <SelectBox Icon={LuLogOut} String="랜덤뽑기" marginLeft="-8px" />
          <S.BackgroundButtonContainer>
            <S.WoodBackgroundButton
              handleClick={toggleWoodBackground}
              backgroundColor="#007200"
              hoverBackground="#14540d"
            />
            <S.WoodBackgroundButton
              handleClick={toggleWhiteBackground}
              backgroundColor="white"
              hoverBackground="#ece6cc"
            />
          </S.BackgroundButtonContainer>
        </S.UpDownWrapper>
        <S.ResultWrapper color={isWoodBackground == 'wood' ? 'white' : 'black'}>
          {chosenStudents.length > 0 ? (
            <p>
              뽑힌 학생은{' '}
              <S.ResultSpan>{chosenStudents.join('  ')}</S.ResultSpan> 입니다.
            </p>
          ) : (
            <p>아직 선정이 완료되지 않았습니다</p>
          )}
        </S.ResultWrapper>
        <S.UpDownWrapper justifyContent="flex-end">
          <SaveConditionButton
            Icon={AiOutlineUserAdd}
            string="뽑기"
            marginLeft="10px"
          />
          <SaveConditionButton
            Icon={AiOutlineUserAdd}
            string="한 번 더"
            marginLeft="10px"
          />
          <SaveConditionButton
            Icon={AiOutlineUserAdd}
            string="조건설정"
            marginLeft="10px"
            onClick={fromResultToSelect}
          />
        </S.UpDownWrapper>
      </S.RandomResult>
    </S.Layout>
  );
}

export default RandomPick;
