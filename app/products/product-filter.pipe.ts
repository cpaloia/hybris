import {PipeTransform, Pipe} from '@angular/core';
import {IRepository} from './IRepository';


@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform{

    transform(value: IRepository[], filterBy : string): IRepository[]{
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((repository: IRepository) =>
            repository.full_name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}