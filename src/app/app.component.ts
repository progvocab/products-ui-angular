import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'products-ui-angular';

  productName = "Camera";

  constructor(private service : AppService){}

  ngOnInit() {
		this.service.loadProduct( )
			.subscribe(
				(data: any ) => {
					this.productName = data.resp[0].productName;
				},
				(error) => console.log(error)
		);
	} ;
}
