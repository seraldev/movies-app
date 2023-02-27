import { ReactNode, FC } from 'react';
import { Card } from '..';
import { Movie } from '../../models';

interface Props {
    children?: ReactNode;
    list: Movie[]
}

export const List: FC<Props> = ({list}) => {

    return (
        <section className="bg-section-primary min-h-main-section py-8">

            {
                list.length > 0
                    ? (
                        <div className="grid md:grid-cols-responsive gap-4">
                            {
                                list.map((movie: Movie) => (<Card key={movie.id} movie={movie} />))
                            }
                        </div>
                    )
                    : (
                        <div className="flex justify-center">
                            <h2 className="text-primary">No movies found</h2>
                        </div>
                    )
                }
        </section>
    )
}
