export class TerminologyFormatValueConverter {
    toView(value: string, terminology: any): string {
        let term = null;
        if (terminology) {
            term = terminology.find(t => t.name === value);
        }
        return (term ? term.term : value);
    }
}