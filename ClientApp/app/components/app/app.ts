import { Aurelia, PLATFORM, autoinject } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";
import { Terminology } from "./Terminology";
import { LocaleSummary } from "./LocaleSummary";
import { LocaleService } from "./LocaleService";

@autoinject

export class App {
    public terminology: Terminology[];

    constructor(private localeService: LocaleService) {
    }

    activate(parms, routeConfig) {
        return this.localeService.getTerminology()
                .then(t => { this.terminology = t });
    }

	configureRouter(config: RouterConfiguration, router: Router) {
		config.title = "AureliaDotnetTemplate";
		config.map([{
			route: ["", "home"],
			name: "home",
			settings: { icon: "home" },
			moduleId: "../home/home",
			nav: true,
			title: "Home"
		}, {
			route: "counter",
			name: "counter",
			settings: { icon: "education" },
			moduleId: "../counter/counter",
			nav: true,
			title: "Counter"
		}, {
			route: "fetch-data",
			name: "fetchdata",
			settings: { icon: "th-list" },
			moduleId: "../fetchdata/fetchdata",
			nav: true,
			title: "Fetch data"
		}]);
	}
}
