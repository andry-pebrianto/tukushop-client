import React, {useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AdminNavbar from "../../../components/Navbar/AdminNavbar";
import AdminSidebar from "../../../components/Section/AdminSidebar";
import { getDetailBrandsAdmin } from "../../../redux/action/brandAdmin";
export default function BrandView() {
	const brandId = useParams().id;
	const dispatch = useDispatch();
	const detailBrands = useSelector((state) => state.detailBrands);
	useEffect(() => {
		dispatch(getDetailBrandsAdmin(brandId));
		document.title = "TukuShop - Detail brand";
	}, []);
	return (<>
		<>
			<div className="container-fluid d-flex p-0">
				<AdminSidebar active="brand" />
				<div className="d-flex flex-column" style={{ height: "100vh", width: "80%" }}>
					<AdminNavbar />
					<div className="d-flex flex-column w-100 h-100" style={{ backgroundColor: "#f4f6f9" }}>
						<h2 style={{ padding: "15px", fontWeight: "400" }}>Brand</h2>
						<div className="d-flex justify-content-center">
							<div className="card" style={{ width: "90%" }}>
								<div className="card-header">
									<h5 className="card-title m-0">Brand Detail</h5>
								</div>
								<div className="card-body">
									{detailBrands.isLoading ? 
										(<div>Loading...</div>) : 
										detailBrands.isError ? 
											(<div>{detailBrands.error}</div>) : 
											detailBrands.data ? 
												(<div className="d-flex flex-column w-100">
													<h6>Brand name: {detailBrands.data.brand_name}</h6>
													<div className="d-flex align-items-center mb-4">
														<h6>Brand image:&nbsp;</h6>
														<img src={`https://drive.google.com/uc?id=${detailBrands.data.photo}`} style={{ width: "300px" }} />
													</div>
													<div className="d-flex w-100">
														<Link to="/admin/brand">
															<button className="btn btn-secondary">Back</button>
														</Link>
													</div>
												</div>):
												null
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	</>);
}
