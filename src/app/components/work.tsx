export default function Work() {
  return (
    <div id="work" className="content-container">
      <div className="flex flex-col lg:flex-row gap-y-20 justify-around m-8 gap-20">
        <div className="w-full md:w-86">
          <h1 className="text-3xl mb-3">Integration Developer</h1>
          <p className="mb-2">2022 - Present</p>
          <p className="mb-2">Frends Technology</p>
          <p>
            Designed, developed, tested and debugged various integration
            solutions connecting enterprise systems, leveraging the Frends
            integration platform.
          </p>
          <p>
            Main technologies used: C#, SQL, APIs, XML, JSON, .NET, SFTP/FTP
          </p>
        </div>
        <div className="w-full md:w-86">
          <h1 className="text-3xl mb-3">Storage Worker</h1>
          <p className="mb-2">2018 - 2021</p>
          <p className="mb-2">Makita</p>
          <p>Responsible for all logistic related tasks</p>
        </div>
        <div className="w-full md:w-86">
          <h1 className="text-3xl mb-3">Truck Driver</h1>
          <p className="mb-2">7/2018 - 11/2018</p>
          <p className="mb-2">Posti</p>
          <p>
            Started from parcel distributions and advanced to pallet
            distributions
          </p>
        </div>
      </div>
    </div>
  );
}
