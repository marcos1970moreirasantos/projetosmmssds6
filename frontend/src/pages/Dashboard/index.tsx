import NavBar from "components/NavBar";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";
import DataTable from "components/DataTable";
import Footer from "components/Footer";
const Dashboard = () => {
    return (

        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py=3">Dashboard de Vendas</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secundary">Taxa sucesso (%)</h5>
                        <BarChart />
                    </div>
                    <div className="col px-6">
                        <h5 className="text-center text-secundary">Full vendas</h5>
                        <DonutChart />
                    </div>

                </div>
                <div className="py-3">
                    <h2 className="text-primary">Todas vendas</h2>
                </div>
                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
