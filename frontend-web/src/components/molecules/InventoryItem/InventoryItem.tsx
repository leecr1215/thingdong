import { Image } from '@/components/atoms/Image/Image';
import Thing from '@/components/molecules/Thing/Thing';
import * as S from './InventoryItem.styles';

type InventoryItemProps = {
  price: number;
  isOwned: boolean;
  imagePath: string;
  onClick: () => void;
};

const InventoryItem: React.FC<InventoryItemProps> = ({
  price,
  isOwned,
  imagePath,
  onClick,
}) => {
  return (
    <S.InventoryItemContainer $isOwned={isOwned} onClick={onClick}>
      <Image
        src={require('@/assets/images/friend/' + imagePath).default}
        $unit={'px'}
        width={80}
        height={80}
      />
      {!isOwned && (
        <S.ThingWrapper>
          <Thing price={price} />
        </S.ThingWrapper>
      )}
    </S.InventoryItemContainer>
  );
};

export default InventoryItem;
