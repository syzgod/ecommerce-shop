import { TbTruckDelivery, TbCashOff, TbBuildingStore } from 'react-icons/tb';

const TopBanner = () => {
  return (
    <div className='top-banner'>
      <ul>
        <li>
          <a href='#'>
            <TbTruckDelivery size={20} />
            <span>Fast delivery</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <TbCashOff size={20} />
            <span>Free delivery above €50</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <TbBuildingStore size={20} />
            <span>Click & Collect</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopBanner;
