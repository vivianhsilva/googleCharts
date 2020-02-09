function desenharGraficos(){

	//grafico de barras com arquivo json
		var dadosJson = $.ajax({
			//url: 'dados.json',
			url: 'https://gist.githubusercontent.com/vivianhsilva/e8babd0b1060456572a0a7a1f33ad1e4/raw/cbacf74c30c6fac1419403c33eb1ef1543188b78/graficoBarras.json',
			dataType: 'json',
			async: false
		}).responseText;

		var tabela = new google.visualization.DataTable(dadosJson);

		tabela.sort([{ column: 1, desc: true }]);

		var opcoes = {
					title: 'Usuários e Poupanças',
					height: 400,
					width: 800,
					legend: 'none',
					hAxis: {
						gridlines: {
							color: 'transparent'
						},
						textPosition: 'none'
					},
					annotations: 
					{
						alwaysOutside: true
					}
		}

		var grafico = new google.visualization.BarChart(document.getElementById('graficoBarrasJson'));	
		grafico.draw(tabela, opcoes);	

}