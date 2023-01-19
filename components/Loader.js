export default function Loader() {
  return (
    <>
      <div>
        <svg
          className="loader"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="24px"
          height="30px"
          viewBox="0 0 24 30"
          style={{ enableBackground: 'new 0 0 50 50' }}
          xmlSpace="preserve"
        >
          <rect x={0} y={0} width={4} height={10} fill="#fff">
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="translate"
              values="0 0; 0 20; 0 0"
              begin={0}
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x={10} y={0} width={4} height={10} fill="#fff">
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="translate"
              values="0 0; 0 20; 0 0"
              begin="0.2s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x={20} y={0} width={4} height={10} fill="#fff">
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="translate"
              values="0 0; 0 20; 0 0"
              begin="0.4s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>
      <style jsx>{`
        .loader {
          width: 14.82px;
          height: 14px;
        }
        svg path,
        svg rect {
          fill: #fff;
        }
        @media (min-width: 601px) {
          .loader {
            width: 18px;
            height: 17px;
          }
        }
      `}</style>
    </>
  );
}