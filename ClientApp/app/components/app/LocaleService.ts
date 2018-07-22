import { HttpClient, json } from 'aurelia-fetch-client';
import { NewInstance, inject } from 'aurelia-framework';
import { LocaleSummary } from './LocaleSummary';
import { Terminology } from './Terminology';

@inject(NewInstance.of(HttpClient))
export class LocaleService {

    constructor(private http: HttpClient) {
        http.configure(config => {
            config.useStandardConfiguration()
                .withBaseUrl('/api/Locale/');
        });
    }

    getTerminology(): Promise<Terminology[]> {
        return this.http.fetch('Terminology')
            .then(result => result.json() as Promise<Terminology[]>);
    }
}