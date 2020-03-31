var pathname = window.location.pathname;

if(pathname != "/index.html"){

function CrearBarraSuperiorPages(){
    document.getElementById("ftco-navbar").innerHTML=`
    <div class="container">
			<a class="navbar-brand" href="../index.html">FreakerWorld</a>

			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
				aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="oi oi-menu"></span> Menú
			</button>

			<div class="collapse navbar-collapse" id="ftco-nav">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item active"><a href="../index.html" class="nav-link">Pagina Principal</a></li>
					<li class="nav-item"><a href="about.html" class="nav-link">Conocenos</a></li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown"
							aria-haspopup="true" aria-expanded="false">Tienda</a>
						<div class="dropdown-menu" aria-labelledby="dropdown04">
							<a class="dropdown-item" href="shop.html">Categorias</a>
							<a class="dropdown-item" href="wishlist.html">Lista de deseos</a>
							<a class="dropdown-item" href="product-single.html">Productos aleatorios</a>
							<a class="dropdown-item" href="cart.html">Carretilla</a>
							<a class="dropdown-item" href="checkout.html">Realizar Pago</a>
						</div>
					</li>

					<li class="nav-item"><a href="contact.html" class="nav-link">Contactanos</a></li>
					<li class="nav-item cta cta-colored"><a href="cart.html" class="nav-link"><span
								class="icon-shopping_cart"></span>[00]</a></li>

				</ul>
			</div>
			<!-- Seccion del avatar del Usuario -->
			<div class="Avatar-Usuario">

				<a href="#">
					<div class="avatar-container">
						<div class="avatar">
							<img src="https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png">
						</div>
						<div class="brand">
							Rony Castejon
						</div>
					</div>
				</a>
			</div>
		</div>
    `;
}

CrearBarraSuperiorPages();

}else{
	function CrearBarraSuperiorIndex(){
		document.getElementById("BarraIndex").innerHTML=`
		<div class="container">
				<a class="navbar-brand" href="../index.html">FreakerWorld</a>
	
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
					aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="oi oi-menu"></span> Menú
				</button>
	
				<div class="collapse navbar-collapse" id="ftco-nav">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item active"><a href="../index.html" class="nav-link">Pagina Principal</a></li>
						<li class="nav-item"><a href="page/about.html" class="nav-link">Conocenos</a></li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown"
								aria-haspopup="true" aria-expanded="false">Tienda</a>
							<div class="dropdown-menu" aria-labelledby="dropdown04">
								<a class="dropdown-item" href="page/shop.html">Categorias</a>
								<a class="dropdown-item" href="page/wishlist.html">Lista de deseos</a>
								<a class="dropdown-item" href="page/product-single.html">Productos aleatorios</a>
								<a class="dropdown-item" href="page/cart.html">Carretilla</a>
								<a class="dropdown-item" href="page/checkout.html">Realizar Pago</a>
							</div>
						</li>
	
						<li class="nav-item"><a href="page/contact.html" class="nav-link">Contactanos</a></li>
						<li class="nav-item cta cta-colored"><a href="cart.html" class="nav-link"><span
									class="icon-shopping_cart"></span>[00]</a></li>
	
					</ul>
				</div>
				<!-- Seccion del avatar del Usuario -->
				<div class="Avatar-Usuario">
	
					<a href="#">
						<div class="avatar-container">
							<div class="avatar">
								<img src="https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png">
							</div>
							<div class="brand">
								Rony Castejon
							</div>
						</div>
					</a>
				</div>
			</div>
		`;
	}
	
	CrearBarraSuperiorIndex();
}

//Funciones que son comunes en las paginas
function CrearFooter(){
    document.getElementById("pie_pagina").innerHTML=`<div class="container">
    <div class="row">
        <div class="mouse">
            <a href="#" class="mouse-icon">
                <div class="mouse-wheel"><span class="ion-ios-arrow-up"></span></div>
            </a>
        </div>
    </div>

    <div class="row mb-5">
        <div class="col-md">
            <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">FreakerWorld</h2>
                <p>El mundo donde siempre reviviras tu infancia y tendras muchas vidas.</p>
                <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                    <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                    <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                    <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
                </ul>
            </div>
        </div>
        <div class="col-md">
            <div class="ftco-footer-widget mb-4 ml-md-5">
                <h2 class="ftco-heading-2">Menu</h2>
                <ul class="list-unstyled">
                    <li><a href="../index.html" class="py-2 d-block">Pagina principal</a></li>
                    <li><a href="shop.html" class="py-2 d-block">Tienda</a></li>
                    <li><a href="contact.html" class="py-2 d-block">Contactanos</a></li>
                    <li><a href="cart.html" class="py-2 d-block">Carretilla</a></li>
                </ul>
            </div>
        </div>

    </div>
    <div class="row">
        <div class="col-md-12 text-center">

            <p>
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                Copyright &copy;<script>
                    document.write(new Date().getFullYear());
                </script> Esta pagina esta hecha con <i class="icon-heart color-danger" aria-hidden="true"></i>
                y sufrimiento por <a href="../index.html">Rony Castejon</a>
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            </p>
        </div>
    </div>
</div>`;
}
CrearFooter();


AOS.init({
	duration: 800,
	easing: 'slide'
});
(function($) {

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


})(jQuery);





