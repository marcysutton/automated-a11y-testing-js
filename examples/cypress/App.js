import {useRef} from 'react'
import './styles.scss'
import Dropdown from './components/Dropdown'

export function App() {
	const bannerRef = useRef(null)
	const headerRef = useRef(null)

	const notificationClickHandler = () => {
		bannerRef.current.remove()

		headerRef.current.focus()
	}
	const confirmPayment = () => {
		return
	}

	return <>
		<header id="global-header">
			<div className="notification-banner" ref={bannerRef}>
				<div className="header-inner">
					<p><span role="img" aria-label="Attention">⚠️</span> Your account was recently updated.</p>
					<button
						aria-label="Close banner" className="header-button"
						onClick={notificationClickHandler}
					>
						X
					</button>
				</div>
			</div>
			<div className="header-inner">
				<h1
					className="header-header"
					data-testid="h1Heading"
					ref={headerRef} tabIndex="-1"
				>
					The Phone Company
				</h1>
			</div>
		</header>
		<main id="main">
			<div className="section">
				<header>
					<h2>Make a Payment</h2>
					<div className="stepper">
						<ol aria-label="progress">
							<li className="inactive"><span></span></li>
							<li className="inactive"><span></span></li>
							<li aria-label="Step 3"><span>3</span></li>
						</ol>
					</div>
				</header>
				<article>
					<h3>Take a moment to review your payment</h3>
					<p>Your total payment: $60.00 <a href="#" className="toggle">Change</a></p>

					<Dropdown buttonName="Details">
						<h4>Visit Summmary</h4>
						<table border="0" cellSpacing="2" cellPadding="0" summary="list of charges for payment receipt">
							<tbody><tr>
								<th align="left">Patient</th>
								<th align="left">Date</th>
								<th align="left">Service</th>
								<th className="amountheader" align="right">Amount</th>
							</tr>
							<tr>
								<td>McCheddarton, Rainier</td>
								<td>10/18/2021</td>
								<td>99203 Office Visit/New</td>
								<td className="amountcolumn" align="right">$60.00</td>
							</tr>
							<tr className="topborder">
								<td></td>
								<td></td>
								<td style={{textAlign: "right"}} align="right">Subtotal:</td>
								<td style={{textAlign: "right"}} align="right">$60.00</td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td style={{textAlign: "right"}} align="right">Sales Tax:</td>
								<td style={{textAlign: "right"}} align="right">$0.00</td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td style={{textAlign: "right"}} align="right">Total:</td>
								<td style={{textAlign: "right"}} align="right">$60.00</td>
							</tr>
						</tbody></table>
					</Dropdown>

					<h3>Payment method</h3>
					<h4>Credit card <a href="#" className="toggle">Change</a></h4>
					<div className="credit-card">
						<div className="number">
							<span className="asterisk">••••</span>
							<span className="asterisk">••••</span>
							<span className="asterisk">••••</span>
							<span>3958</span></div>
						<div className="exp">5/25</div>
						<div className="flex">
							<div className="name">Rainier McCheddarton</div>
							<div className="logo" role="img"></div>
						</div>
					</div>

					<h4>Billing address</h4>
					<address>
						Rainier McCheddarton<br />
						7790 AZIMOUTH ST<br />
						BELLINGHAM, WA 98229
					</address>

					<div className="confirm" onClick={confirmPayment}>Confirm payment</div>
				</article>
			</div>
		</main>
		<footer id="footer">
			&copy; 2021 <a href="#" className="company-logo">Telecommunications Services, Inc.</a>
		</footer>
	</>
}
