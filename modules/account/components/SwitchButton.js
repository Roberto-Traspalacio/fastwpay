export default function SwitchButton({ checked, handleChecked }) {
  return (
    <>
      <div>
        <input type="checkbox" checked={checked} onChange={handleChecked} />
      </div>
      <style jsx>{`
        input[type='checkbox'] {
          /* border: 1px solid red; */
          position: relative;
          appearance: none;
          display: flex;
          align-items: center;
          width: 38px;
          height: 20px;
          background: #ccc;
          border-radius: 30px;
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: 0.4s;
          margin: 0;
        }

        input:checked[type='checkbox'] {
          background: #295bb7;
        }

        input[type='checkbox']::after {
          position: absolute;
          content: '';
          width: 16.25px;
          height: 16.25px;
          left: 7%;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
          transform: scale(1.1);
          transition: 0.4s;
          margin: 0;
        }

        input:checked[type='checkbox']::after {
          left: 50%;
        }
      `}</style>
    </>
  );
}
