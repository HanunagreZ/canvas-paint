import toolState from '../store/toolState';
import '../styles/toolbar.scss';

const SettingBar = () => {
  return (
    <div className="toolbar setting-bar">
      <label style={{ marginLeft: '10px' }} htmlFor="line-width">
        Толщина линии
      </label>
      <input
        style={{ margin: '0 10px' }}
        type="number"
        id="line-width"
        defaultValue={1}
        min={1}
        max={50}
        onChange={(e) => toolState.setLineWidth(e.target.value)}
      />
    </div>
  );
};

export default SettingBar;
