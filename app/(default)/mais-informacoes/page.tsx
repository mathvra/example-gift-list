import MoreInformationItem from "@/components/MoreInformationItem/MoreInformationItem";
import { Flower, Wine } from "@phosphor-icons/react/dist/ssr";

export default function MoreInformation() {
  return (
    <main className="container mx-auto">
      <div className="flex flex-col gap-6 py-4">
        <h1 className="text-center text-3xl font-bold">Mais informações</h1>
        <div className="flex flex-col xl:flex-row gap-12">
          <MoreInformationItem
            title={"Cerimônia"}
            iconTitle={
              <Flower className="fill-secondary" size={24} weight="bold" />
            }
            description={
              "Gostaríamos muito de contar com a presença de todos vocês no momento em que nossa união será abençoada diante de Deus! Contamos com vocês!"
            }
            imageUrl={"/church.png"}
            addressTitle={"Paróquia de São Sebastião"}
            address={
              "Av. Coronel Estevam, 1657 - Alecrim, Natal - RN, 59035-000"
            }
            addressUrl={"https://maps.app.goo.gl/6cchBbkgh3Zcp2F77"}
          />

          <MoreInformationItem
            title={"Recepção"}
            iconTitle={
              <Wine size={24} className="fill-secondary" weight="bold" />
            }
            description={
              "Convidamos você também para recepção após cerimônia religiosa. Vamos festejar juntos!"
            }
            imageUrl={"/party.png"}
            addressTitle={"Versailles Recepções"}
            address={
              "R. Cel. Milton Freire, 2919 - Cidade Jardim, Natal - RN, 59078-310"
            }
            addressUrl={"https://maps.app.goo.gl/CFLdE7zjptnACgzSA"}
          />
        </div>
      </div>
    </main>
  );
}
