import * as React from "react";

export default function Boy({ active, ...props }) {
  return (
    <svg width={160} height={160} fill="none" {...props}>
      <rect
        width={160}
        height={160}
        rx={22}
        fill={active ? "#4835A9" : "#F8F6FF"}
      />
      <g opacity={0.54}>
        <g opacity={0.54} fill="#301B8B">
          <path
            opacity={0.54}
            d="M46.83 34.227a4.014 4.014 0 01-3.275-1.52 5.988 5.988 0 01-.987-4.886c.296-1.286.998-2.253 1.971-2.722 4.33-2.085 6.395.976 7.08 2.381 1.224 2.518-.988 5.356-2.043 6.012a5.602 5.602 0 01-2.746.735zm-1.828-8.165c-.68.34-1.17 1.037-1.396 2a4.938 4.938 0 00.79 3.984 2.949 2.949 0 002.437 1.12h.03a4.482 4.482 0 002.158-.569 4.862 4.862 0 001.477-1.864c.34-.721.644-1.786.164-2.776-.83-1.701-2.485-3.423-5.66-1.895z"
          />
          <path
            opacity={0.54}
            d="M48.46 33.05s.47 1.759.98 1.956c.565.221 2.383-1.154 2.151-1.643-.231-.49-1.416-1.66-1.416-1.66L48.46 33.05z"
          />
          <path
            opacity={0.54}
            d="M49.352 33.097a.535.535 0 01-.453-.245l-2.137-3.36a.536.536 0 01.346-.842.533.533 0 01.552.266l2.141 3.361a.537.537 0 01-.163.739.545.545 0 01-.286.081z"
          />
          <path
            opacity={0.54}
            d="M48.133 28.093a1.473 1.473 0 11-2.084 2.081 1.473 1.473 0 012.084-2.081z"
          />
        </g>
        <path
          opacity={0.54}
          d="M95.383 43.559a3.616 3.616 0 01-.905-.119 4.293 4.293 0 01-2.937-3.096 4.935 4.935 0 01.796-4.045 4.779 4.779 0 013.57-2.004 3.036 3.036 0 013.125 2.28 2.472 2.472 0 01-1.334 2.993 1.282 1.282 0 01-.626.14 1.592 1.592 0 01-2.621 1.065c-.68-.643-.68-1.851-.34-2.722a2.1 2.1 0 011.898-1.453.591.591 0 01.593.585.528.528 0 010 .13.59.59 0 01.241.272c.072.16.133.316.191.466.058.15.122.31.177.418a1.325 1.325 0 00.68-1.599 1.836 1.836 0 00-1.878-1.405 3.566 3.566 0 00-2.702 1.507 3.805 3.805 0 00-.613 3.062 3.065 3.065 0 002.09 2.242c.95.252 1.912-.095 2.787-.996a.587.587 0 01.417-.182.593.593 0 01.438 1.005 4.257 4.257 0 01-3.047 1.456zm.34-5.678a1.193 1.193 0 00-.493.623c-.221.564-.156 1.21.055 1.411.086.082.239.075.459-.02.27-.12.228-1.136 0-1.885a.855.855 0 01-.03-.13h.01z"
          fill="#301B8B"
        />
        <g opacity={0.54} fill="#301B8B">
          <path
            opacity={0.54}
            d="M122.727 61.852a3.08 3.08 0 01-.231-.065c-1.29-.415-2.383-1.908-1.991-3.956.309-1.613 1.174-2.899 2.304-3.436a2.572 2.572 0 012.383.05.583.583 0 01-.128 1.04.583.583 0 01-.424-.019 1.389 1.389 0 00-1.321-.027c-.786.374-1.422 1.36-1.664 2.606-.265 1.381.405 2.382 1.208 2.63.681.218 1.311-.11 1.668-.885a.592.592 0 01.327-.315.573.573 0 01.454.015.591.591 0 01.336.567.603.603 0 01-.062.223c-.476 1.028-1.518 1.875-2.859 1.572zM128.54 54.065l-.32.088-.129.034c-.051-.15-.099-.3-.146-.449a.364.364 0 00-.681.218c.048.143.089.286.129.429l-.581.163c-.518.14-.385 1.02.163.939l.636-.092c.041.133.086.269.14.405a.381.381 0 00.257.215.387.387 0 00.328-.066.224.224 0 00.105-.098.807.807 0 00.021-.578l.296-.041c.841-.123.623-1.382-.218-1.167zM132.046 53.398l-.32.088-.13.035c-.047-.15-.098-.3-.145-.45a.364.364 0 00-.681.218c.047.143.088.286.129.429l-.582.163c-.514.14-.385 1.02.167.94l.636-.093c.041.136.086.269.14.405a.379.379 0 00.255.215.383.383 0 00.327-.065.257.257 0 00.109-.099.828.828 0 00.017-.578l.296-.041c.841-.123.623-1.395-.218-1.167z"
          />
        </g>
        <g opacity={0.54} fill="#301B8B">
          <path
            opacity={0.54}
            d="M109.15 108.775a.524.524 0 01-.462-.763l3.403-6.586a.521.521 0 01.925.479l-3.403 6.587a.533.533 0 01-.463.283zM107.333 107.41a.523.523 0 01-.463-.279l-1.93-3.691a.519.519 0 01.194-.681l3.638-2.163a.518.518 0 01.532.891l-3.21 1.908 1.702 3.253a.52.52 0 01.034.398.52.52 0 01-.497.364zM112.047 109.226a.52.52 0 01-.201-1l3.744-1.568-1.362-3.851a.518.518 0 01.305-.705.527.527 0 01.582.172.537.537 0 01.094.192l1.535 4.318a.52.52 0 01-.289.653l-4.204 1.759a.506.506 0 01-.204.03z"
          />
        </g>
        <g opacity={0.54} fill="#301B8B">
          <path
            opacity={0.54}
            d="M48.202 95.934a7.988 7.988 0 00-1.215-1.644l-1.11.99a3.645 3.645 0 00-2.038-.56 7.66 7.66 0 00-.198-1.45 3.55 3.55 0 00-2.351.854c.15.363.357.7.612 1 .038.048.082.092.12.14l-.082.05c-1.021.681-1.545 1.389-1.756 2.087-.314-.055-.627-.113-.943-.161a.413.413 0 00-.221 0 .323.323 0 00-.154.153 1.13 1.13 0 000 .749c.079.34.154.701.232 1.05.04.185.109.403.293.457.14.02.282-.014.398-.095.15-.078.306-.15.46-.221.068.22.15.436.244.646a3.99 3.99 0 001.324 1.613l-.793.66.569.292c.597.376 1.28.598 1.984.647.124-.347.219-.703.282-1.065a3.74 3.74 0 001.154-.323c.525-.24.973-.619 1.297-1.096.247.144.475.318.68.517.011.015.025.026.04.034a.129.129 0 00.052.011c.03 0 .048-.034.065-.062l.453-.752c.234-.379.405-.794.507-1.228-.375-.099-.722-.224-1.096-.34.11-.707.09-1.43-.058-2.13a5.778 5.778 0 001.229-.68.132.132 0 00.047-.048.122.122 0 00-.027-.095zm-4.01 3.99a1.443 1.443 0 01-1.162.043 1.452 1.452 0 01-.822-.825c-.224-.514-.445-1.344.64-2.041.892-.578 1.886-.099 2.11.38.225.48.29 1.964-.765 2.444zM54.471 98.601a3.995 3.995 0 00-.626-.844l-.569.507a1.91 1.91 0 00-1.041-.282 3.92 3.92 0 00-.102-.745 1.822 1.822 0 00-1.208.439c.078.187.183.361.313.517l.065.071a.195.195 0 00-.045.028 1.968 1.968 0 00-.902 1.072l-.486-.086a.242.242 0 00-.113 0 .146.146 0 00-.078.079.572.572 0 000 .384l.12.541c.02.095.057.207.149.235a.28.28 0 00.204-.048l.238-.116c.036.116.078.229.126.34.149.333.384.619.681.831l-.409.34.293.15a2.25 2.25 0 001.021.34 3.08 3.08 0 00.143-.548c.206-.023.408-.08.596-.167.275-.12.511-.317.68-.564.125.074.239.163.34.265 0 0 .032.027.049.023a.051.051 0 00.02-.01.054.054 0 00.014-.02l.234-.388c.119-.195.206-.408.26-.629-.192-.051-.372-.119-.566-.18a3.065 3.065 0 00-.027-1.1c.224-.088.436-.202.633-.34a.06.06 0 00.02-.027.05.05 0 00-.01-.056.047.047 0 00-.017-.012zm-2.042 2.041a.735.735 0 01-.6.021.737.737 0 01-.421-.428.766.766 0 01-.06-.602.755.755 0 01.4-.453.785.785 0 011.086.197c.092.258.133 1.031-.415 1.276l.01-.011z"
          />
        </g>
        <g opacity={0.54} fill="#301B8B">
          <path
            opacity={0.54}
            d="M134.394 75.696a8.086 8.086 0 00-1.215-1.644l-1.109.99a3.682 3.682 0 00-2.022-.547 7.791 7.791 0 00-.197-1.45 3.565 3.565 0 00-2.352.854c.15.364.356.701.612 1 .038.048.078.096.119.14l-.081.051c-1.022.68-1.549 1.391-1.757 2.086-.316-.055-.629-.113-.942-.16a.442.442 0 00-.222 0 .32.32 0 00-.153.152 1.131 1.131 0 000 .75c.079.34.153.7.232 1.05.041.188.109.405.293.456a.554.554 0 00.398-.095c.15-.078.306-.15.459-.221.069.22.151.436.245.647a4.004 4.004 0 001.324 1.616l-.793.656.569.296c.622.323 1.279.657 1.984.643.125-.344.218-.7.279-1.062a3.884 3.884 0 001.157-.34c.524-.24.973-.618 1.297-1.095.246.145.475.319.681.517.01.014.024.026.04.033a.106.106 0 00.051.011c.028 0 .048-.034.065-.058l.453-.755a4.15 4.15 0 00.507-1.228c-.375-.099-.722-.225-1.096-.34.11-.707.091-1.43-.058-2.13a5.894 5.894 0 001.228-.68.104.104 0 00.045-.051.113.113 0 00-.041-.092zm-3.992 3.99a1.449 1.449 0 01-1.168.036 1.454 1.454 0 01-.816-.835c-.225-.51-.446-1.344.64-2.041.888-.575 1.885-.096 2.11.384.224.48.289 1.977-.766 2.456zM140.68 78.363a3.978 3.978 0 00-.627-.844l-.568.507a1.903 1.903 0 00-1.041-.278 4.019 4.019 0 00-.102-.75 1.847 1.847 0 00-1.209.443c.078.186.183.36.313.514l.066.071-.045.028a2.005 2.005 0 00-.905 1.071c-.161-.027-.32-.058-.484-.081a.21.21 0 00-.112 0 .157.157 0 00-.078.081.565.565 0 000 .385l.112.537c.021.095.058.207.15.235a.284.284 0 00.204-.051c.078-.04.16-.079.238-.112.036.115.077.229.126.34.149.332.384.619.681.83l-.409.34.293.15c.307.196.658.313 1.021.34.065-.177.113-.36.143-.547.206-.024.408-.08.596-.167.275-.121.511-.317.681-.565.123.076.237.167.34.269 0 0 .03.023.048.02.017-.004.023-.017.033-.03.079-.13.157-.259.232-.389.121-.194.21-.406.262-.629-.191-.05-.371-.115-.565-.18a3.033 3.033 0 00-.027-1.096 2.97 2.97 0 00.63-.34.055.055 0 00.023-.024.054.054 0 00.006-.043.057.057 0 00-.026-.035zm-2.042 2.041a.808.808 0 01-1.049-1.005.81.81 0 01.368-.457.773.773 0 011.082.194c.096.262.13 1.034-.415 1.282l.014-.014z"
          />
        </g>
        <g opacity={0.54}>
          <g opacity={0.54}>
            <path
              opacity={0.54}
              d="M21.422 71.912h-.187c-1.072-.092-2.185-1.051-2.24-2.705-.044-1.3.395-2.442 1.175-3.061a2.048 2.048 0 011.841-.389.461.461 0 01-.241.888 1.12 1.12 0 00-1.021.21c-.542.43-.858 1.315-.824 2.308.037 1.116.732 1.759 1.395 1.817.569.05.994-.313 1.134-.973a.463.463 0 01.544-.357.464.464 0 01.347.55c-.183.872-.844 1.712-1.923 1.712zM24.645 65.927a.688.688 0 00-.628.179.683.683 0 00-.189.625.726.726 0 001.021.456.572.572 0 00.17-.144.507.507 0 00.191-.258.71.71 0 00-.565-.858zM25.813 68.904a.535.535 0 00-.113-.186.653.653 0 00-.5-.372.624.624 0 00-.626.293.703.703 0 00-.041.644.68.68 0 00.728.4.68.68 0 00.552-.779z"
              fill="#301B8B"
            />
          </g>
          <path
            opacity={0.54}
            d="M27.674 70.365a.46.46 0 01-.456-.42l-.589-6.371a.462.462 0 01.92-.086l.585 6.373a.46.46 0 01-.416.504h-.044z"
            fill="#301B8B"
          />
        </g>
      </g>
      <path
        d="M68.877 82.013c-14.999 12.588-23.483-4.5-20.104-13.336 0 0 4.374 2.51 4.578-.442.204-2.953-2.754-.861-4.016-1.98-1.263-1.12-.787-2.637.374-3.022 1.16-.384 1.702 0 1.926 1.464.212 1.313 2.267 1.472 2.723.364.456-1.11.164-4.746-5.146-4.9-.15-.755 1.538-7.049-1.361-7.008-2.301.027-1.4 5.066-1.362 6.464-.806-2.381-.912-6.341-3.335-5.13-2.423 1.21 1.385 6.552 1.385 6.552s-2.593-4.399-4.155-2.357c-1.127 1.466.3 2.806 2.33 4.283 1.573 1.14.64 4.46.403 5.699-.756 3.97-3.064 19.61 9.135 24.604 6.36 2.602 12.96.452 12.96.452l3.665-11.707z"
        fill="#FFC9AE"
      />
      <path
        d="M68.877 82.013l-3.628 11.724s-6.6 2.15-12.957-.456c-10.06-4.12-10.255-15.49-9.587-21.57-.1 6.244 1.44 14.691 9.808 18.117 6.358 2.606 12.96.456 12.96.456l2.281-7.373c.367-.279.746-.578 1.123-.898z"
        fill="#FFB890"
      />
      <path
        d="M90.81 82.013c14.998 12.588 23.483-4.5 20.103-13.336 0 0-4.373 2.51-4.577-.442-.204-2.953 2.753-.861 4.016-1.98 1.263-1.12.786-2.637-.374-3.022-1.161-.384-1.702 0-1.927 1.464-.214 1.313-2.266 1.472-2.722.364-.456-1.11-.164-4.746 5.145-4.9.15-.755-1.538-7.049 1.362-7.008 2.301.027 1.399 5.066 1.361 6.464.807-2.381.912-6.341 3.335-5.13 2.424 1.21-1.384 6.552-1.384 6.552s2.593-4.399 4.155-2.357c1.126 1.466-.299 2.806-2.331 4.283-1.573 1.14-.64 4.46-.402 5.699.756 3.97 3.063 19.61-9.135 24.604-6.361 2.602-12.96.452-12.96.452L90.81 82.013z"
        fill="#FFC9AE"
      />
      <path
        d="M90.823 82.013l3.628 11.724s6.599 2.15 12.957-.456c10.061-4.12 10.255-15.49 9.588-21.57.099 6.244-1.44 14.691-9.809 18.117-6.357 2.606-12.96.456-12.96.456l-2.28-7.373c-.368-.279-.746-.578-1.124-.898z"
        fill="#FFB890"
      />
      <path
        d="M98.137 84.644c-1.756-.235-6.569-2.352-8.383-3.46-4.476-3.535-14.897-3.743-19.45-.34-.423.319-7.124 3.973-8.915 3.792-1.456-.142-1.902 11.949 0 12.476.627.172 1.262.31 1.903.415-.248 7.924-.467 20.188.946 21.774 1.702 1.922 29.46 1.922 31.176 0 1.42-1.592 1.143-13.888.875-21.774a19.783 19.783 0 001.848-.408c1.902-.528 1.446-12.279 0-12.475z"
        fill="#4835A9"
      />
      <g opacity={0.8} fill="#fff">
        <path
          opacity={0.8}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M90.076 88.458a.736.736 0 00-.55-.513.918.918 0 00-.425.001.705.705 0 00-.526.569c-.02.115.003.194.072.24l.035.026 1.056.104-.007.02a.434.434 0 01-.477.298.438.438 0 01-.322-.163c-.058-.07-.08-.087-.128-.097a.18.18 0 00-.127.026.17.17 0 00-.061.127c0 .051.01.08.051.133a.728.728 0 00.358.248c.089.03.304.051.394.04a.738.738 0 00.64-.504.694.694 0 00.04-.22.725.725 0 00-.023-.335zm-.864-.216a.418.418 0 00-.3.263l-.006.02.857.081-.002-.017a.633.633 0 00-.023-.077.421.421 0 00-.396-.275.386.386 0 00-.13.005zM87.455 87.774a.745.745 0 00-.456.174.763.763 0 00-.243.407 1.23 1.23 0 00-.025.34.73.73 0 00.348.554.917.917 0 00.779.066.58.58 0 00.17-.104c.063-.051.094-.098.099-.146.01-.101-.042-.166-.139-.175-.058-.006-.092.008-.151.06a.48.48 0 01-.668-.052c-.053-.067-.097-.173-.092-.227l.001-.016.508.049c.452.043.51.047.543.04a.183.183 0 00.114-.084c.017-.029.02-.042.027-.118a.66.66 0 00-.152-.492.786.786 0 00-.663-.276zm.262.355c.066.033.13.087.165.14a.565.565 0 01.066.168l.003.02-.848-.08.007-.022a.42.42 0 01.468-.261.336.336 0 01.14.035z"
        />
        <path
          opacity={0.8}
          d="M90.663 87.325a.167.167 0 01.101-.093.247.247 0 01.145.014.16.16 0 01.082.097c.012.035.011.041-.05.711l-.063.676.408-.294c.438-.316.471-.338.516-.348a.215.215 0 01.133.023c.089.059.102.209.025.284a5.488 5.488 0 01-.285.2c-.143.095-.26.175-.26.178 0 .003.041.067.092.142l.226.333c.153.226.174.27.168.343-.009.093-.07.16-.155.17a.18.18 0 01-.137-.041c-.02-.016-.094-.124-.257-.376l-.235-.364c-.005-.008-.038.01-.141.078l-.134.09-.022.192c-.022.192-.023.194-.047.236a.15.15 0 01-.126.079.173.173 0 01-.176-.082l-.003-.004-.005-.008c-.024-.042-.018-.102.072-1.05l.01-.09c.098-1.037.1-1.057.118-1.096zM92.228 88.502c.074-.212.285-.337.58-.344a1.27 1.27 0 01.55.113.632.632 0 01.192.151c.059.086.03.215-.057.26-.075.038-.126.027-.223-.05a.642.642 0 00-.559-.12c-.143.043-.197.193-.093.259.051.033.098.043.306.072.25.033.344.059.45.123.152.093.212.233.191.449-.022.246-.175.405-.433.454a1.551 1.551 0 01-.701-.07c-.133-.048-.285-.162-.316-.237-.032-.077.002-.186.072-.227.025-.016.042-.019.083-.018.056.001.064.006.161.082.112.088.216.126.397.143.144.014.207.008.275-.026.063-.033.09-.066.098-.123.01-.06 0-.09-.038-.12-.055-.045-.173-.076-.352-.093-.255-.024-.44-.097-.53-.21-.07-.086-.092-.183-.078-.33a.665.665 0 01.025-.138z"
        />
        <path
          opacity={0.8}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M84.873 87.85a.73.73 0 01.501-.236.804.804 0 01.561.167c.017.015.05.05.073.077l.043.05.002-.032a.218.218 0 01.076-.137c.041-.03.082-.038.14-.027a.168.168 0 01.146.156c.003.028-.018.264-.068.772l-.006.062c-.06.6-.069.691-.1.775l-.019.046-.004.01a.704.704 0 01-.413.391.942.942 0 01-.442.042c-.293-.029-.525-.13-.647-.281a.197.197 0 01-.05-.162c.01-.106.077-.163.183-.153.051.005.075.02.148.09a.574.574 0 00.194.125c.077.03.296.054.373.039a.43.43 0 00.33-.26.833.833 0 00.032-.16l.015-.119-.06.047a.68.68 0 01-.374.141 1.216 1.216 0 01-.323-.035c-.34-.108-.527-.386-.524-.777a.97.97 0 01.213-.61zm1.113.479a.446.446 0 00-.286-.33.789.789 0 00-.268-.032.438.438 0 00-.366.295.778.778 0 00-.027.291.45.45 0 00.454.382c.225.005.389-.095.466-.286a.445.445 0 00.032-.156.432.432 0 00-.005-.164zM87.89 86.525c-.005.004-.007.007-.007.012a20.559 20.559 0 00.018.304l.001.008.007.002c.01.002.03.002.043 0a.265.265 0 00.165-.115.173.173 0 00.022-.051.103.103 0 00-.003-.049.046.046 0 00-.024-.022c-.007-.004-.008-.004-.022-.003a.105.105 0 00-.046.013.314.314 0 00-.112.094l-.004-.049a2.018 2.018 0 00-.01-.14c-.006-.007-.02-.009-.028-.004zm.784-.037c-.008.004-.008-.003-.002.12.005.136.01.202.014.204a.099.099 0 00.034.003.18.18 0 00.08-.026.261.261 0 00.071-.054c.035-.037.055-.077.053-.11-.002-.046-.035-.063-.084-.044a.308.308 0 00-.12.095l-.005.007-.002-.032a6.543 6.543 0 01-.012-.159c-.004-.007-.018-.009-.027-.004zm-.51.025a.022.022 0 00-.009.008l-.002.003.004.054.014.199.004.06.003.002c.01.008.026.006.03-.002l-.008-.126-.008-.11a1.1 1.1 0 00-.006-.085c-.005-.006-.015-.007-.023-.003zm.782-.037a.04.04 0 00-.008.008c-.002.004-.002.005-.001.018l.004.06.013.172.003.051v.014l.004.003c.008.006.018.006.025.002.007-.005.007.01-.006-.175l-.007-.096-.004-.055-.003-.002c-.005-.004-.014-.004-.02 0zm-.573.124a.21.21 0 00-.132.116.142.142 0 00-.014.072c.001.019.004.024.01.03.01.011.023.015.05.015.031 0 .06-.01.087-.029a.212.212 0 00.037-.04l.006-.01.003.034.002.034.004.004c.007.01.015.013.023.007a.02.02 0 00.008-.007c.003-.003.003-.004.001-.015a.636.636 0 01-.007-.088c-.005-.07-.007-.083-.017-.102-.006-.012-.013-.018-.022-.02a.144.144 0 00-.04 0zm.78-.037a.214.214 0 00-.143.16.104.104 0 00.006.054c.007.01.022.017.044.019a.14.14 0 00.095-.028.177.177 0 00.04-.043c.003-.005.005-.007.006-.006l.002.032c.001.033.003.036.01.043.009.007.016.006.025-.002l.005-.006-.001-.008a.67.67 0 01-.008-.078.536.536 0 00-.008-.09c-.007-.03-.016-.043-.031-.047a.145.145 0 00-.042 0zm-.76.073c.026.006.023.053-.006.103a.149.149 0 01-.078.067c-.017.004-.03 0-.04-.008-.007-.007-.009-.013-.009-.025a.09.09 0 01.009-.04.215.215 0 01.069-.081c.02-.013.042-.019.055-.016zm.788-.035c.017.008.018.037.002.074a.181.181 0 01-.059.077.085.085 0 01-.045.019.036.036 0 01-.032-.019c-.018-.032.026-.11.08-.14.022-.013.042-.017.054-.011zm-1.086.052c.005.002.01.006.013.012.003.007.003.008-.002.021a.217.217 0 01-.074.093c-.032.023-.076.042-.09.038l-.005-.001v-.01c0-.028.016-.058.044-.09a.22.22 0 01.088-.063.088.088 0 01.026 0zm.783-.037a.02.02 0 01.014.021.15.15 0 01-.02.045.258.258 0 01-.087.078c-.025.014-.049.022-.059.02-.005 0-.006-.001-.006-.01 0-.017.008-.039.02-.06a.33.33 0 01.043-.051.211.211 0 01.062-.04c.01-.004.026-.005.033-.003z"
        />
        <path
          opacity={0.8}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M89.235 86.165a2.63 2.63 0 01-.099.003l-.127.004-.146.007a34.22 34.22 0 01-.305.015l-.056.003a1.878 1.878 0 01-.105.006 5.765 5.765 0 00-.197.009c-.02 0-.055.003-.079.004a15.76 15.76 0 01-.123.006 1.412 1.412 0 00-.232.023c-.097.016-.16.044-.197.086a.272.272 0 00-.039.097l.004.099c.006.075.006.089-.001.11-.013.042-.035.062-.076.07-.036.006-.048.012-.057.028a.05.05 0 00.007.06c.01.013.014.015.05.019.045.005.063.015.08.046.013.025.017.052.017.124a.436.436 0 00.02.149c0 .008.036.05.056.062a.29.29 0 00.047.023.485.485 0 01.035.015.216.216 0 01.004.051c0 .028.002.068.004.091.002.037.004.043.017.058.01.012.018.016.031.017.024.003.037-.005.095-.06.028-.026.076-.07.105-.099.06-.056.063-.057.126-.058.026 0 .088-.004.2-.01l.078-.004.208-.01.097-.004.183-.01c.054-.005.141-.01.236-.013l.06-.002.025.02a1.704 1.704 0 00.226.17c.032.003.064-.024.063-.056a5.172 5.172 0 00-.008-.162c0-.005.005-.011.018-.017a.262.262 0 00.081-.059.212.212 0 00.041-.151.616.616 0 01.001-.159.091.091 0 01.084-.07c.035-.002.058-.031.05-.063-.006-.022-.021-.033-.056-.037-.041-.007-.055-.013-.073-.035-.019-.023-.026-.06-.026-.131 0-.115-.017-.166-.072-.212-.044-.038-.161-.06-.275-.053zm.228.256c0-.072-.013-.109-.052-.138-.016-.011-.025-.014-.06-.019a.778.778 0 00-.161-.002c-.025.002-.09.004-.143.005a5.036 5.036 0 00-.141.005c-.024.002-.068.003-.099.004a16.13 16.13 0 00-.398.017l-.144.007a9.385 9.385 0 00-.44.03c-.082.008-.13.028-.158.067-.012.015-.012.016-.013.082 0 .036.001.076.004.088a.203.203 0 01-.016.117.19.19 0 01-.068.063c-.01.005-.007.015.004.016.014.001.052.03.067.05.02.028.029.067.029.124 0 .092.007.139.026.16a.19.19 0 00.07.044c.014.001.036.018.044.033a.51.51 0 01.009.12c0 .004 0 .007.003.007.005-.002.048-.045.089-.089a.8.8 0 01.052-.053c.025-.022.033-.024.122-.026l.062-.004a8.27 8.27 0 00.287-.014l.116-.005.229-.012.14-.007.119-.005c.03 0 .075-.002.097-.004l.04-.002.037.031a6.225 6.225 0 00.133.112c.005.005.014.008.015.004a.677.677 0 01-.007-.099c0-.033 0-.035.014-.048a.088.088 0 01.028-.02.195.195 0 00.068-.05c.016-.02.022-.047.019-.081a.662.662 0 01-.002-.18.148.148 0 01.066-.081c.013-.007.023-.014.022-.016 0-.002-.01-.007-.02-.01a.182.182 0 01-.072-.065c-.014-.031-.019-.068-.017-.156z"
        />
      </g>
      <path
        d="M83.11 76.362h-6.568c0 4.012-.368 6.016 3.284 6.016 3.652 0 3.285-1.991 3.285-6.016z"
        fill="#FFB890"
      />
      <path
        d="M115.964 124.54c-1.558-6.389-12.116-8.274-17.793-8.165H62.404c-5.677-.106-16.235 1.779-17.794 8.165-1.541 6.321.273 18.372 35.679 11.543 35.407 6.832 37.217-5.222 35.675-11.543z"
        fill="#2A1879"
      />
      <path
        d="M115.964 124.421c1.817 6.464-.306 18.803-36.86 11.411 0 0 1.083-6.975-.582-11.728 21.252-7.637 35.996-4.841 37.442.317z"
        fill="#5A47B9"
      />
      <path
        d="M79.105 135.842s.115-.739.214-1.898c32.817 6.498 37.397-3.141 36.567-9.757.032.081.059.163.082.244 1.818 6.461-.307 18.797-36.863 11.411z"
        fill="#301B8B"
      />
      <path
        d="M93.672 138.094a20.363 20.363 0 01-3.744-.085c-5.31-.517-12.039-2.351-12.039-2.351l3.707-9.795s5.126-.221 9.257-.186c2.043.02 3.853.098 4.667.299 3.567.884 3.689 11.567-1.848 12.118z"
        fill="#4835A9"
      />
      <path
        d="M81.518 128.558c.136 0 8.301.272 8.06.388-.243.115-.545 5.195-.545 5.195s-8.267-1.16-8.169-1.289c.1-.13.654-4.294.654-4.294z"
        fill="#919191"
      />
      <path
        d="M93.672 138.094a20.362 20.362 0 01-3.744-.085c-1.12-1.636-1.702-4.031-1.416-6.614a10.375 10.375 0 012.341-5.718c2.043.02 3.853.098 4.667.299 3.567.885 3.69 11.567-1.848 12.118z"
        fill="#fff"
      />
      <path
        d="M93.672 138.094c-.711.06-1.425.072-2.138.034.147 0 .286-.017.422-.031 5.541-.537 5.412-11.226 1.835-12.118-.97-.2-1.957-.3-2.948-.299 1.64 0 3.584.03 4.666.295 3.578.885 3.7 11.568-1.837 12.119zM88.162 135.128a.508.508 0 01-.31-.104.51.51 0 01-.184-.267c-.42-1.493-.17-3.368.14-4.763-.61 1.068-1.162 2.66-.98 4.181a.504.504 0 01-.108.379.514.514 0 01-.914-.26c-.34-2.766 1.501-6.341 2.94-6.583a.513.513 0 01.59.417.508.508 0 01-.024.263c0 .038-1.331 3.743-.681 6.083a.505.505 0 01-.34.63.473.473 0 01-.13.024z"
        fill="#D1D1D1"
      />
      <path
        d="M84.268 134.532a.508.508 0 01-.504-.449c-.34-2.766 1.501-6.341 2.941-6.586a.5.5 0 01.385.089.502.502 0 01.21.336.511.511 0 01-.236.523.498.498 0 01-.189.072c-.602.102-2.403 2.879-2.097 5.461a.51.51 0 01-.449.565l-.061-.011z"
        fill="#D1D1D1"
      />
      <path
        d="M82.185 134.314a.509.509 0 01-.507-.453c-.34-2.765 1.504-6.338 2.944-6.582a.497.497 0 01.381.087.5.5 0 01.208.331.517.517 0 01-.42.588c-.602.103-2.402 2.879-2.1 5.444a.512.512 0 01-.445.568l-.061.017z"
        fill="#D1D1D1"
      />
      <path
        d="M88.178 134.951a.524.524 0 01-.187-.038c-1.361-.541-2.382-4.423-1.494-7.056a.513.513 0 01.967.34c-.84 2.46.34 5.552.905 5.784a.515.515 0 01.263.228.514.514 0 01-.124.644.515.515 0 01-.33.115v-.017z"
        fill="#fff"
      />
      <path
        d="M86.113 134.729a.479.479 0 01-.19-.037c-1.362-.541-2.384-4.423-1.492-7.052a.494.494 0 01.102-.172.504.504 0 01.552-.141.496.496 0 01.292.261.505.505 0 01.02.391c-.84 2.457.341 5.55.906 5.784a.509.509 0 01.133.866.517.517 0 01-.323.118v-.018z"
        fill="#fff"
      />
      <path
        d="M84.046 134.512a.538.538 0 01-.19-.038c-1.361-.541-2.382-4.423-1.494-7.056a.511.511 0 01.967.34c-.841 2.46.34 5.553.905 5.784a.51.51 0 01-.188.986v-.016z"
        fill="#fff"
      />
      <path
        d="M97.02 120.75c-1.728 1.409-32.462 1.619-34.425 0-1.964-1.619-4.194-26.108-3.002-27.285 1.19-1.177 38.8-1.068 40.43 0 1.63 1.068-1.274 25.877-3.002 27.285z"
        fill="#C9C9C9"
      />
      <path
        d="M98.484 115.868c-.5 2.633-1.021 4.521-1.46 4.882-1.73 1.408-32.466 1.619-34.43 0-1.964-1.619-4.176-26.108-3.002-27.285.164-.16 1.906 15.922 6.936 20.273 8.816 7.621 25.748 5.743 31.956 2.13z"
        fill="#C9C9C9"
        opacity={0.21}
      />
      <path
        d="M56.628 119.049c7.91.507 20.761 4.848 25.808 6.172-.755 1.191-1.912 10.727-1.398 11.226-36.867 7.486-38-6.001-36.417-12.172.486-1.953 3.679-5.763 12.007-5.226z"
        fill="#7363C7"
      />
      <path
        d="M81.038 136.44c-34.256 6.944-37.656-4.194-36.71-10.76.984 6.236 8.046 13.087 36.71 7.28v3.48z"
        fill="#301B8B"
      />
      <path
        d="M95.942 60.593a.524.524 0 01-.167.078 7.255 7.255 0 01-1.49.201l-.539.028h-.08l-.433.016h-.97c-6.252.123-18.72-.384-24.618-.649h-.316l-.865-.038-.405-.02-1.644-.078c-.2-.22-.384-.455-.551-.701-1.16-1.647-2.502-4.562-1.729-5.165.902-.704 2.253-.173 2.28-.585.028-.411-2.127-3.579-1.256-4.576.872-.996.875-.115 1.256-.47.222-.203-.398-1.7-.53-3.19a6.011 6.011 0 01-.028-.61c0-.87.255-1.7.998-2.184.37-.23.706-.516.993-.847.582-.731-.123-.959.848-1.497 1.27-.704 2.913.34 2.913.34s2.288-4.28 3.461-4.456c1.175-.177 1.055 1.582 2.043 1.36.987-.22 2.463-2.285 3.696-2.697 1.78-.592-.504 1.878.34 1.878.844 0 2.76-2.348 5.517-2.756.963.823-.398 2.184 1.77 2.524 2.168.34 1.174 2.229 2.583 2.875 1.41.647.483 1.419 1.893 1.888 1.409.47 1.643-.306 2.045 1.222.401 1.527.05 1.817 1.548 2.64 1.498.823 3.064 1.466 2.28 3.283-.782 1.817-.914 3.11 0 2.756.916-.354 1.094-.409.859.646-.236 1.055-1.995 3.521-.528 3.521s.16 4.216-1.174 5.263z"
        fill="#B64401"
      />
      <path
        d="M95.942 60.593a.524.524 0 01-.167.078 7.255 7.255 0 01-1.49.201l-.539.028h-.08l-.433.016h-.97c-6.252.123-18.72-.384-24.618-.649h-.316l-.865-.038-.405-.02-1.644-.078c-.2-.22-.384-.455-.551-.701-1.16-1.647-2.502-4.562-1.729-5.165.902-.704 2.253-.173 2.28-.585.028-.411-2.127-3.579-1.256-4.576.872-.996.875-.115 1.256-.47.222-.203-.398-1.7-.53-3.19a6.011 6.011 0 01-.028-.61c0-.87.255-1.7.998-2.184.37-.23.706-.516.993-.847.582-.731-.123-.959.848-1.497 1.27-.704 2.913.34 2.913.34s2.288-4.28 3.461-4.456c1.175-.177 1.055 1.582 2.043 1.36.987-.22 2.463-2.285 3.696-2.697 1.78-.592-.504 1.878.34 1.878.844 0 2.76-2.348 5.517-2.756.963.823-.398 2.184 1.77 2.524 2.168.34 1.174 2.229 2.583 2.875 1.41.647.143 1.079 1.552 1.548 1.41.47 1.984.034 2.386 1.562.401 1.527.05 1.817 1.548 2.64 1.498.823 3.064 1.466 2.28 3.283-.782 1.817-.914 3.11 0 2.756.916-.354 1.094-.409.859.646-.236 1.055-1.995 3.521-.528 3.521s.16 4.216-1.174 5.263z"
        fill="#B64401"
      />
      <path
        d="M94.839 59.828v.34a.81.81 0 01-.545.718.858.858 0 01-.538.027h-.03a.129.129 0 01-.051 0 .924.924 0 01-.433.017.772.772 0 01-.34-.15.704.704 0 01-.238-.34.826.826 0 01-.044-.313 13.094 13.094 0 00-.368-3.796.768.768 0 01.623-.97.219.219 0 01.044 0 10.292 10.292 0 00-.225-.827 9.792 9.792 0 00-.513-1.327c-.025-.05-.048-.105-.076-.153l-.08-.15v-.016a1.07 1.07 0 00-.065-.116 1.746 1.746 0 00-.133-.221 6.101 6.101 0 00-.603-.827c-.017-.02-.034-.044-.054-.064-1.127-1.286-2.689-2.096-4.336-2.753-3.952-1.568-8.55-1.453-12.688-.483a1.093 1.093 0 01-.125.868 1.087 1.087 0 01-.726.493c-2.103.7-3.714 1.813-5.446 3.042l-.68.486c0 .736-.065 1.47-.198 2.194-.01.068-.026.136-.048.201.278.658.49 1.342.63 2.041l.027.03c.123.141.22.3.29.474a1.7 1.7 0 01-.215 1.701 2.191 2.191 0 01-.296.34l-.027.028a2.189 2.189 0 01-.436.554 2.42 2.42 0 01-.803.459c-.078.027-.16.054-.242.075a2.591 2.591 0 01-1.937-.214 4.414 4.414 0 01-.973-.746c.143-.31.352-.585.613-.805.093-.078.192-.147.296-.209-1.16-1.646-2.502-4.562-1.73-5.164.903-.704 2.254-.173 2.282-.585.026-.411-2.128-3.579-1.256-4.576.87-.996.874-.115 1.255-.47.222-.203-.398-1.7-.53-3.19h.023c-.028-.2-.045-.401-.05-.603 0-.87.255-1.7.997-2.184a4.4 4.4 0 00.994-.847.254.254 0 01.194.212.258.258 0 01-.008.101c-.405 1.198-.88 2.113-.411 3.382.285-.323.589-.63.908-.919.681-.619 1.651.266 1.185.95.248.01.495.047.735.112.52-1.188 1.113-2.314 2.423-2.879.49-.21 1.157.14.97.749-.048.15-.102.34-.157.51.123-.21.222-.377.28-.462a1.702 1.702 0 011.998-.52c.68-.681 1.395-1.314 2.117-1.933 1.198-1.02 2.335-1.725 3.938-1.49 1.02.146 1.058 1.646.272 2.092-.259.163-.51.34-.756.517a6.517 6.517 0 00-.759.711 21.9 21.9 0 01-.908 1.102c.02.028.047.048.064.075a13.618 13.618 0 002.658-.942 9.567 9.567 0 013.578-.834 1.36 1.36 0 011.289 1.569c1.205.044 2.41.05 3.622 0a.72.72 0 01.68.891 3.289 3.289 0 01-.2.745c.34-.04.656-.068.986-.078a.34.34 0 01.255.508.344.344 0 01-.166.145c-.681.228-1.361.391-2.042.589a.518.518 0 01-.596-.715 5.487 5.487 0 01-1.514.29c.76.227 1.5.516 2.212.863 4.591 2.294 6.283 7.876 6.157 12.67z"
        fill="#B64401"
        opacity={0.31}
      />
      <path
        d="M67.043 67.833a1.587 1.587 0 01-.197 0c-4.184-.23-5.041-5.103-3.904-7.361a2.214 2.214 0 01.909-1.014c.891-.538 1.647-.17 2.185.34.15.144.288.3.415.466.15.194.285.402.401.62.035.057.051.09.051.09l.14 6.86z"
        fill="#FFB890"
      />
      <path
        d="M65.1 63.479a2.69 2.69 0 01.05-.266 5.217 5.217 0 01.783-1.595c.075-.112-.071-.255-.187-.188-1.021.626-1.94 1.963-1.507 3.22.34.962 1.912 1.595 2.42.434.4-.912-.562-2.225-1.56-1.605z"
        fill="#F29B62"
      />
      <path
        d="M92.024 68.296h-.204v-.235l.136-6.637c.086-.169.182-.331.29-.487.186-.279.407-.534.656-.758.592-.524 1.43-.848 2.403-.058.184.152.342.335.466.54 1.348 2.14.603 7.394-3.747 7.635z"
        fill="#FFB890"
      />
      <path
        d="M93.76 63.951a3.694 3.694 0 00-.051-.265 5.174 5.174 0 00-.783-1.592c-.075-.112.072-.255.188-.188 1.02.627 1.94 1.964 1.507 3.22-.34.962-1.913 1.595-2.42.434-.401-.91.576-2.224 1.56-1.609z"
        fill="#F29B62"
      />
      <path
        d="M92.957 56.637c0 1.241 0 2.425-.051 3.551 0 .252-.017.5-.027.746a56.425 56.425 0 01-.198 3.062c-.064.68-.14 1.323-.235 1.946A24.66 24.66 0 0192 68.289a.064.064 0 010 .027c-.52 2.14-1.303 3.892-2.457 5.253-2.018 2.382-5.173 3.58-10.064 3.58-4.962 0-8.14-1.23-10.156-3.688a12.03 12.03 0 01-2.154-4.352c-.116-.408-.225-.83-.32-1.269a26.305 26.305 0 01-.412-2.382 36.801 36.801 0 01-.2-1.88 62.245 62.245 0 01-.188-3.318v-.446c-.03-1.02-.04-2.041-.04-3.143-.014-12.527 26.948-12.527 26.948-.034z"
        fill="#FFC9AE"
      />
      <path
        d="M89.935 73.055c-.126.17-.259.34-.395.497-2.018 2.382-5.173 3.58-10.064 3.58-4.962 0-8.141-1.23-10.156-3.689a12.016 12.016 0 01-2.155-4.351c-.115-.408-.224-.83-.32-1.27a26.29 26.29 0 01-.41-2.38 36.761 36.761 0 01-.202-1.882 62.245 62.245 0 01-.187-3.317v-.446c-.031-1.02-.041-2.041-.041-3.143a7.75 7.75 0 012.96-6.124 7.561 7.561 0 00-1.449 4.528c0 1.092 0 2.14.04 3.144v.445c.037 1.169.1 2.274.188 3.318.055.65.12 1.278.201 1.88.109.844.246 1.644.412 2.4.095.438.204.86.32 1.268a12.029 12.029 0 002.154 4.352c2.015 2.46 5.194 3.687 10.156 3.687 4.068-.02 6.936-.847 8.948-2.497z"
        fill="#FFB890"
      />
      <path
        d="M72.907 66c-1.538 0-3.097-1.212-3.097-3.525a.51.51 0 011.02 0c0 1.721 1.077 2.504 2.077 2.504s2.08-.783 2.08-2.504a.513.513 0 01.51-.51.511.511 0 01.51.51c0 2.313-1.558 3.525-3.1 3.525zM86.569 66c-1.539 0-3.098-1.212-3.098-3.525a.51.51 0 011.021 0c0 1.721 1.076 2.504 2.077 2.504 1 0 2.075-.783 2.075-2.504a.51.51 0 011.022 0c0 2.313-1.555 3.525-3.097 3.525zM74.265 55.786a.521.521 0 01-.433-.238c-.34-.538-.68-.834-.925-.834s-.582.297-.926.834a.502.502 0 01-.32.25.511.511 0 01-.541-.794c.558-.881 1.143-1.31 1.787-1.31.643 0 1.231.428 1.79 1.31a.513.513 0 01-.432.782zM87.926 55.786a.515.515 0 01-.432-.238c-.34-.538-.68-.834-.926-.834-.245 0-.599.296-.94.837a.514.514 0 01-.526.26.51.51 0 01-.334-.804c.558-.881 1.14-1.31 1.787-1.31.646 0 1.232.429 1.79 1.31a.513.513 0 01-.16.704.535.535 0 01-.259.075zM80.058 69.47h-.16a.803.803 0 00-.804.803v1.487c0 .443.36.802.804.802h.16c.443 0 .803-.36.803-.802v-1.487a.803.803 0 00-.803-.803z"
        fill="#B64401"
      />
      <g opacity={0.68} fill="#F29D86">
        <path
          opacity={0.68}
          d="M73.377 70.317a3.243 3.243 0 01-1.269 2.573 3.241 3.241 0 01-2.815.553 12.016 12.016 0 01-2.155-4.351 3.228 3.228 0 013.629-1.98 3.23 3.23 0 012.61 3.205zM92.025 68.296h-.028c-.52 2.14-1.303 3.892-2.457 5.253h-.041a3.23 3.23 0 01-2.702-1.447 3.227 3.227 0 01-.284-3.052A3.237 3.237 0 0192 68.27l.025.027z"
        />
      </g>
      <path
        d="M87.323 106.604c-.282-.496-.894-.881-1.671-.743s-1.703 1.581-2.038 1.628c-.173.025-.292-.108-.364-.242.245-.393.246-.432.303-.678a.295.295 0 00-.027-.191c.15-.094.233-.196.233-.302 0-.471-1.625-.853-3.63-.853-2.003 0-3.629.382-3.629.853 0 .106.083.208.234.302a.286.286 0 00-.027.191c.057.246.057.285.305.683.249.399.21.987-.115 1.29-.21.196-.603.599-.818 1.146-.315.007-.706-.008-.977-.102-.689-.241-1.286-2.552-1.458-2.828-.202-.335-.383-.454-1.006-.454-.622 0-1.127.14-1.127.312 0 .134.303.249.73.293.227.11.595.44.76 1.424.247 1.48.058 2.675 1.49 3.357.764.365 1.382.443 1.823.417.279.624.727 1.185 1.443 1.481 1.121.462 1.931.507 2.373.47.442.037 1.25-.008 2.372-.47a2.516 2.516 0 001.008-.759c.251.014.507.023.614.004.239-.039.112-.553.318-1.099.206-.545 1.815-1.387 2.5-2.426.684-1.04.663-2.207.38-2.703l.001-.001zm-.421 1.056c-.132 1.608-1.237 2.106-1.934 2.599-.174.123-.424.391-.69.71.015-.089.027-.178.038-.264.133-1.053-.616-1.845-.946-2.155.21-.117.433-.248.643-.385.74-.486 1.177-1.166 1.782-1.529.605-.364 1.174.2 1.107 1.024z"
        fill="#fff"
      />
      <path
        d="M76.957 105.691c.172-.223.33-.72.593-.985.263-.266.632-.266.937-.816.282-.505.523-1.377.934-1.56v-.315h.104v-.249h-.726c.16-.22.381-.436.64-.577l.271-.559a.64.64 0 01-.31-.715.642.642 0 011.241 0 .627.627 0 01-.032.41.64.64 0 01-.278.305l.272.559c.258.141.48.357.639.577h-.727v.249h.104v.315c.412.182.652 1.055.934 1.56.306.55.675.55.937.816.263.265.421.762.593.985 0 0-1.7.212-3.063.212-1.362 0-3.063-.212-3.063-.212z"
        fill="#fff"
      />
      <path
        d="M80.02 105.223h-.009c-1.977 0-3.579.382-3.579.853 0 .106.081.208.23.302a.29.29 0 00-.027.191c.057.246.057.285.302.683.245.399.207.987-.113 1.29-.207.196-.595.599-.808 1.146-.31.007-.696-.008-.963-.102-.68-.241-1.269-2.552-1.438-2.828-.2-.335-.378-.454-.992-.454s-1.112.14-1.112.312c0 .134.3.249.719.293.225.11.588.44.75 1.424.245 1.48.057 2.675 1.47 3.357.754.365 1.364.443 1.799.417.274.624.716 1.185 1.423 1.481 1.105.462 1.905.507 2.34.47h.008v-8.835z"
        fill="#fff"
      />
      <path
        d="M76.957 105.692c.172-.223.33-.72.591-.986.263-.266.63-.266.935-.816.28-.505.52-1.377.93-1.56v-.315h.104v-.248h-.723c.159-.22.38-.437.637-.578l.27-.559a.64.64 0 01-.309-.715.637.637 0 01.62-.476h.008v6.464h-.008c-1.358 0-3.055-.212-3.055-.212v.001z"
        fill="#fff"
      />
      <path
        d="M68.11 41.542s1.86 6.525 11.4 6.525c9.538 0 11.401-6.525 11.401-6.525l-2.326-14.569h-18.15l-2.327 14.57h.001z"
        fill="#EF3B3B"
      />
      <path
        d="M70.49 26.973c0 2.818 4.038 5.104 9.02 5.104 4.981 0 9.019-2.288 9.019-5.104 0-2.816-4.038-5.103-9.02-5.103-4.98 0-9.018 2.285-9.018 5.103z"
        fill="#F1614E"
      />
      <path
        d="M70.559 40.37c.174-.631.633-1.467.928-1.967-.342-.193-.545-.45-.481-.663.057-.203.343-.31.712-.295l.735-7.454 6.156-4.295a.46.46 0 01.65.123.476.476 0 01.073.356.48.48 0 01-.195.305l-5.799 4.045-.696 7.042a.498.498 0 01-.03.121c.372.195.597.466.535.688-.05.178-.274.282-.575.296.133.788.455 2.703.539 3.37.107.849-.586.518-.586.518l-1.655-1.09s-.575-.14-.31-1.102l-.001.002z"
        fill="#FBAE52"
      />
      <path
        d="M88.62 26.973l2.292 14.57s-1.835 6.524-11.232 6.524V31.984c4.937 0 8.94-2.246 8.94-5.01z"
        fill="#F04C40"
      />
    </svg>
  );
}
