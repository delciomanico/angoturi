import { ItemComposite } from "@/lib/types/interfaqces";

export const LocalPatrimonio = ({ heritage }:{heritage:ItemComposite}) => {
    return (
        <div
            className="bg-white rounded-lg w-[250px] md:w-[350px]  h-[180px] md:h-[200] shadow-md hover:shadow-lg transition-shadow duration-300"
            style={{backgroundImage: `url(${heritage.image || '/images/img3.jpeg'})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
        >
            <div className="h-full flex items-end bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent overflow-hidden rounded-md">
                <div className="text-white text-left p-2">
                    <h3 className="text-lg font-semibold">{heritage.title}</h3>
                    <p className="block mt-1 text-sm text-gray-300">
                        {heritage.description || "Descrição não disponível."} 
                    </p>
                </div>
            </div>
            
        </div>
    );
}