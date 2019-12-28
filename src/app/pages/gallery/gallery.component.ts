import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Service } from 'src/app/model/service.model';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
    services: Service[];
    constructor(private apiService: ApiService) {}

    ngOnInit() {
        this.fetchServices();
    }

    fetchServices() {
        this.apiService.getServices().subscribe(result => {
            if (result) {
                console.log('services', result);
                this.services = result;
            }
        });
    }
}