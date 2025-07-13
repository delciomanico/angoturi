import { Item, ItemComposite } from "@/lib/types/interfaqces";

export const Patrimonio = ({ heritage }:{heritage:Item}) => {
    return (
        <div className="bg-white rounded-lg w-[300px] md:w-[300px] shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="block relative">
                <img src={heritage.image|| '/images/img3.jpeg'} alt={heritage.title} className="rounded-md  shadow-md hover:shadow-lg transition-shadow duration-300" />
                <h3 className="text-md font-semibold">{heritage.title}</h3>
            </div>
            <ul className="block mt-1 p-2 text-sm">
                {heritage.description.map((descricao, index) => (
                    <li key={index}  className="text-left">{descricao}</li>))
                } 
            </ul>
            
        </div>
    );
}