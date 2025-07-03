import Icon from '../../public/icons/icon.svg'

export default function Home() {
  return (
    <div className="container">
        <button className="animated-button color">
            <span>BUTTON</span>
            <img src={Icon.src} alt="Icon" width={24} height={24} />
        </button>
    </div>
  );
}
