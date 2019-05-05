const Precio = ({precioBitcoin}) => {
  const {PRICE, CHANGE24HOUR, HIGHDAY, LOWDAY} = precioBitcoin;
  let price = PRICE.split(' ')[1];
  let change = CHANGE24HOUR.split(' ')[1];
  let highday = HIGHDAY.split(' ')[1];
  let lowday = LOWDAY.split(' ')[1];

  return (
    <div className="card text-white bg-success mb-3">
      <div className="card-header">Precio del Bitcoin</div>
      <div className="card-body">
        <h4 className="card-title">Precio actual: {price}€</h4>
        <div className="d-md-flex justify-content-between">
          <p className="card-text">
            <span className="font-weigth-bold">Cambio de hoy:</span> {change}€
          </p>
          <p className="card-text">
            <span className="font-weigth-bold">Máximo de hoy:</span> {highday}€
          </p>
          <p className="card-text">
            <span className="font-weigth-bold">Mínimo de hoy:</span> {lowday}€
          </p>
        </div>
      </div>
    </div>
  )
};

export default Precio;
