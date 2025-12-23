import { getGames } from "@/actions/games-action";
import { getGenres } from "@/actions/genres-action";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const goty = ["Hollow Knight: Silksong", "Elden Ring", "Grand Theft Auto V"];

export default async function Home() {
  return (
    <div className="max-container pt-[90px]">
      <HeroSection />
      <p className="mt-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nam
        tempore qui, et atque assumenda excepturi voluptatibus nostrum corrupti
        repellat alias, autem aperiam. Eligendi eaque ab alias? Optio, suscipit
        voluptatum recusandae reprehenderit dolores id? Molestiae facilis ullam,
        distinctio corrupti, quisquam nobis exercitationem eum eveniet,
        blanditiis libero rem saepe vel? Est nam ad voluptatum maiores iure
        omnis laborum voluptate deserunt nostrum! Odio et aut soluta ea vero vel
        sit, earum dicta eius doloribus qui doloremque? Optio doloribus quia ex
        quisquam aperiam dicta earum quae nihil, cupiditate, sapiente eos culpa
        praesentium vero quidem velit sed sunt dolores saepe voluptatem impedit.
        Odit nobis doloremque assumenda sed dolore sequi sunt sapiente
        perferendis, ullam iusto alias et perspiciatis adipisci natus,
        necessitatibus nisi vel. Consequuntur tempore voluptate non provident,
        ab, voluptatibus, dolor debitis asperiores similique minima iure vel
        repudiandae quam itaque sapiente vitae mollitia et illo obcaecati
        deserunt praesentium numquam modi molestiae perspiciatis? Velit tempora,
        accusantium architecto quas nisi amet? Fugiat alias, inventore possimus
        ex distinctio quisquam architecto. Neque in nam officia iste iure vel
        repellat velit quod rerum, repellendus nobis sit perferendis qui ea
        veritatis! Ea beatae molestiae id temporibus debitis. Reprehenderit,
        doloribus non. Velit illo sit dolorem facilis esse hic autem similique
        magnam facere aut, ullam officiis optio necessitatibus, atque excepturi
        nam mollitia itaque, fugiat incidunt perspiciatis dicta ex ipsum. Quia,
        aliquam dolore officiis reprehenderit placeat dolorem corporis saepe
        perspiciatis. Praesentium odit nesciunt eaque dolor accusantium
        reiciendis, fugiat quo veritatis ea in sint consequuntur minima tempore
        pariatur blanditiis quos et? Dolore amet neque placeat natus alias
        necessitatibus labore animi quam architecto. Deserunt, deleniti aliquid.
        Nihil, voluptatem ratione. Iure suscipit, nemo, porro aperiam autem
        saepe aliquam delectus aut, ea corrupti debitis architecto repellendus
        enim! Corrupti, similique tempore. Nemo maiores deserunt veritatis ab
        nesciunt illo architecto assumenda, dolor ipsa voluptate sapiente unde
        nam quis neque fugit adipisci et. Porro, suscipit. Quidem quae excepturi
        distinctio nihil doloremque iusto consequatur veritatis quod, ipsam
        totam laudantium nostrum est explicabo doloribus iste? Dolorum molestiae
        dolores distinctio cupiditate accusantium eum, tempora repudiandae illo
        voluptatem temporibus possimus, perspiciatis recusandae vel unde impedit
        sint eos eaque id minima sequi in repellat eveniet. Iure dolor et
        possimus cumque. Voluptate modi earum illum suscipit sunt sint quam
        voluptates iste deleniti, magnam illo corporis similique rem inventore
        vero repudiandae! Quasi, rem. Aspernatur beatae dolorum assumenda
        repellat delectus suscipit sit ex, in nesciunt quisquam pariatur enim
        qui, laboriosam voluptate soluta. Earum alias atque, veritatis deleniti
        corrupti maiores quae blanditiis ratione est incidunt quos, odit iure
        praesentium id dolor inventore! Perferendis et recusandae odio deleniti
        illum reiciendis odit quasi dolores? Excepturi incidunt totam rem? Modi
        aut beatae quidem natus distinctio fugiat suscipit sequi voluptatem at,
        nihil reiciendis quam molestias consequuntur iusto sit omnis itaque
        tempore perferendis! Delectus unde cum voluptates repellendus nam
        consequuntur expedita in beatae explicabo nihil aspernatur voluptatum
        ipsam quo cumque, ab esse quisquam illo quis culpa mollitia? Iusto
        libero dolorem doloremque adipisci, modi a sunt corrupti enim, soluta
        atque excepturi non quas vel ratione officia ullam hic laborum, illum
        voluptates earum repudiandae esse at. Cum in nisi deserunt repellendus
        earum. Quisquam eaque error reiciendis obcaecati, sit, rem minima
        exercitationem magnam inventore ab optio dolores distinctio totam soluta
        architecto eligendi itaque reprehenderit ipsam molestiae impedit
        accusamus consectetur in. Fuga modi expedita sed non ullam, unde autem
        neque quia placeat tenetur dolor, fugit itaque atque facilis. Et
        commodi, odit facilis quam laboriosam vero labore explicabo. Fugit eum
        accusantium sapiente! Voluptate velit illum in explicabo rem reiciendis,
        dolorem quaerat debitis, omnis esse perspiciatis error ea alias quis
        magni, architecto dolorum voluptas nesciunt ratione excepturi animi? Eos
        beatae, ipsam porro molestias tempore explicabo eum corrupti est,
        assumenda soluta itaque alias praesentium! Expedita, animi error
        eveniet, eos quis quisquam nostrum, accusamus autem corporis adipisci
        ratione laborum rerum harum nam id suscipit officia perspiciatis et
        quia. Hic nemo pariatur tempora veritatis rerum excepturi similique,
        voluptate impedit eaque! Reprehenderit laudantium animi repellendus
        quasi doloremque autem accusamus fugiat maxime quibusdam quos eum ex aut
        eius enim, ipsum, dicta facilis officiis nemo voluptatem praesentium.
        Culpa provident sapiente voluptatem, minima quam unde adipisci mollitia
        voluptate facilis labore explicabo dolor tempore nihil nostrum
        doloremque necessitatibus. Illum obcaecati eveniet consectetur a
        nesciunt modi sunt minima error repellat quia inventore cumque assumenda
        hic, maiores repellendus ratione nostrum adipisci commodi
        exercitationem, ex nulla? Iure optio officiis quia rerum non mollitia
        nisi voluptate, libero harum, alias facilis accusantium laboriosam ad,
        voluptates eos illo numquam delectus architecto est veniam iusto.
        Aliquid animi quas rem veniam! Et voluptatum consequuntur
        necessitatibus, ipsam aperiam delectus ipsum, maxime nesciunt
        consequatur perferendis alias blanditiis suscipit, dolorum nisi
        accusamus sint officia ad vero exercitationem perspiciatis iste iure
        provident eum repellendus. Et laboriosam sint quasi incidunt numquam
        omnis dolorem molestiae atque qui ea facilis, officiis cupiditate odit
        perspiciatis modi corporis illo eligendi minima ut dolore quas aut iste
        doloribus pariatur. Repellendus, suscipit. Dolorum, minus! Adipisci
        deleniti in soluta esse ipsam necessitatibus voluptas facere saepe
        accusantium nobis, quam asperiores quos vel sint ratione voluptatem non
        molestiae, eaque perspiciatis odio possimus! Ad modi illo distinctio
        dignissimos accusantium a voluptatum error nihil suscipit eum porro,
        corporis obcaecati pariatur officia enim quas architecto iusto velit
        veniam fugit vitae sint! At, asperiores. Necessitatibus in cum ipsa
        consectetur recusandae sunt quos. Sed quos neque, doloremque ipsa
        facilis nemo earum adipisci asperiores distinctio suscipit accusantium
        reiciendis sapiente possimus voluptatum facere mollitia ab ducimus
        commodi blanditiis tempore reprehenderit rem corrupti quae pariatur.
        Voluptatibus eveniet laudantium suscipit, non corrupti autem delectus,
        labore incidunt est eos at cumque ipsa nostrum dignissimos aut rerum
        reprehenderit laborum sapiente ut! Iste qui sit, in quae vero voluptas
        laboriosam mollitia quia. Reiciendis, ea quisquam aliquam dignissimos
        excepturi dolorum possimus dolor quis nulla temporibus repellat vero
        fuga delectus nisi voluptates reprehenderit beatae nihil exercitationem
        placeat quibusdam sunt! Quisquam molestiae ab natus odit ratione.
        Delectus distinctio quas ipsam a? Dignissimos at quo natus dolorem sed
        earum neque velit porro omnis ipsam quam aut amet iure reprehenderit
        explicabo, illo itaque eligendi officiis veritatis commodi voluptate?
        Nemo natus optio eos ipsam adipisci velit a dignissimos sequi alias rem
        provident eius molestias officia illo, labore mollitia asperiores?
      </p>
    </div>
  );
}
