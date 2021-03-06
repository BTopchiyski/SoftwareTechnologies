PGDMP     1    7            
    y            smart_health_check_db    12.4    12.4 2    C           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            D           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            E           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            F           1262    57437    smart_health_check_db    DATABASE     ?   CREATE DATABASE smart_health_check_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Bulgarian_Bulgaria.1251' LC_CTYPE = 'Bulgarian_Bulgaria.1251';
 %   DROP DATABASE smart_health_check_db;
                postgres    false            ?            1259    57512    Illness_symptoms    TABLE     ?   CREATE TABLE public."Illness_symptoms" (
    illness_id bigint NOT NULL,
    symptom_id bigint NOT NULL,
    id bigint NOT NULL
);
 &   DROP TABLE public."Illness_symptoms";
       public         heap    postgres    false            ?            1259    57510    Illness_symptoms_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Illness_symptoms_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."Illness_symptoms_id_seq";
       public          postgres    false    213            G           0    0    Illness_symptoms_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."Illness_symptoms_id_seq" OWNED BY public."Illness_symptoms".id;
          public          postgres    false    212            ?            1259    57491 	   body_part    TABLE     _   CREATE TABLE public.body_part (
    id bigint NOT NULL,
    name character varying NOT NULL
);
    DROP TABLE public.body_part;
       public         heap    postgres    false            ?            1259    57489    body_part_id_seq    SEQUENCE     y   CREATE SEQUENCE public.body_part_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.body_part_id_seq;
       public          postgres    false    211            H           0    0    body_part_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.body_part_id_seq OWNED BY public.body_part.id;
          public          postgres    false    210            ?            1259    57459    illness    TABLE     ?   CREATE TABLE public.illness (
    id bigint NOT NULL,
    name character varying NOT NULL,
    description character varying
);
    DROP TABLE public.illness;
       public         heap    postgres    false            ?            1259    57457    illness_id_seq    SEQUENCE     w   CREATE SEQUENCE public.illness_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.illness_id_seq;
       public          postgres    false    207            I           0    0    illness_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.illness_id_seq OWNED BY public.illness.id;
          public          postgres    false    206            ?            1259    57448    role    TABLE     Z   CREATE TABLE public.role (
    id bigint NOT NULL,
    name character varying NOT NULL
);
    DROP TABLE public.role;
       public         heap    postgres    false            ?            1259    57446    role_id_seq    SEQUENCE     t   CREATE SEQUENCE public.role_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.role_id_seq;
       public          postgres    false    205            J           0    0    role_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.role_id_seq OWNED BY public.role.id;
          public          postgres    false    204            ?            1259    57470    symptom    TABLE     m   CREATE TABLE public.symptom (
    id bigint NOT NULL,
    name character varying,
    body_part_id bigint
);
    DROP TABLE public.symptom;
       public         heap    postgres    false            ?            1259    57468    symptom_id_seq    SEQUENCE     w   CREATE SEQUENCE public.symptom_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.symptom_id_seq;
       public          postgres    false    209            K           0    0    symptom_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.symptom_id_seq OWNED BY public.symptom.id;
          public          postgres    false    208            ?            1259    57440    user    TABLE     ?   CREATE TABLE public."user" (
    id bigint NOT NULL,
    username character varying(30) NOT NULL,
    email character varying(30) NOT NULL,
    role_id bigint
);
    DROP TABLE public."user";
       public         heap    postgres    false            ?            1259    57438    user_id_seq    SEQUENCE     t   CREATE SEQUENCE public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    203            L           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    202            ?
           2604    57515    Illness_symptoms id    DEFAULT     ~   ALTER TABLE ONLY public."Illness_symptoms" ALTER COLUMN id SET DEFAULT nextval('public."Illness_symptoms_id_seq"'::regclass);
 D   ALTER TABLE public."Illness_symptoms" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    213    212    213            ?
           2604    57494    body_part id    DEFAULT     l   ALTER TABLE ONLY public.body_part ALTER COLUMN id SET DEFAULT nextval('public.body_part_id_seq'::regclass);
 ;   ALTER TABLE public.body_part ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    211    211            ?
           2604    57462 
   illness id    DEFAULT     h   ALTER TABLE ONLY public.illness ALTER COLUMN id SET DEFAULT nextval('public.illness_id_seq'::regclass);
 9   ALTER TABLE public.illness ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    206    207    207            ?
           2604    57451    role id    DEFAULT     b   ALTER TABLE ONLY public.role ALTER COLUMN id SET DEFAULT nextval('public.role_id_seq'::regclass);
 6   ALTER TABLE public.role ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    204    205            ?
           2604    57473 
   symptom id    DEFAULT     h   ALTER TABLE ONLY public.symptom ALTER COLUMN id SET DEFAULT nextval('public.symptom_id_seq'::regclass);
 9   ALTER TABLE public.symptom ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    208    209    209            ?
           2604    57443    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    203    203            @          0    57512    Illness_symptoms 
   TABLE DATA           H   COPY public."Illness_symptoms" (illness_id, symptom_id, id) FROM stdin;
    public          postgres    false    213   ?4       >          0    57491 	   body_part 
   TABLE DATA           -   COPY public.body_part (id, name) FROM stdin;
    public          postgres    false    211   5       :          0    57459    illness 
   TABLE DATA           8   COPY public.illness (id, name, description) FROM stdin;
    public          postgres    false    207   95       8          0    57448    role 
   TABLE DATA           (   COPY public.role (id, name) FROM stdin;
    public          postgres    false    205   V5       <          0    57470    symptom 
   TABLE DATA           9   COPY public.symptom (id, name, body_part_id) FROM stdin;
    public          postgres    false    209   ?5       6          0    57440    user 
   TABLE DATA           >   COPY public."user" (id, username, email, role_id) FROM stdin;
    public          postgres    false    203   ?5       M           0    0    Illness_symptoms_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."Illness_symptoms_id_seq"', 1, false);
          public          postgres    false    212            N           0    0    body_part_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.body_part_id_seq', 1, false);
          public          postgres    false    210            O           0    0    illness_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.illness_id_seq', 1, false);
          public          postgres    false    206            P           0    0    role_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.role_id_seq', 2, true);
          public          postgres    false    204            Q           0    0    symptom_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.symptom_id_seq', 1, false);
          public          postgres    false    208            R           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 2, true);
          public          postgres    false    202            ?
           2606    57517 &   Illness_symptoms Illness_symptoms_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."Illness_symptoms"
    ADD CONSTRAINT "Illness_symptoms_pkey" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public."Illness_symptoms" DROP CONSTRAINT "Illness_symptoms_pkey";
       public            postgres    false    213            ?
           2606    57499    body_part body_part_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.body_part
    ADD CONSTRAINT body_part_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.body_part DROP CONSTRAINT body_part_pkey;
       public            postgres    false    211            ?
           2606    57467    illness illness_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.illness
    ADD CONSTRAINT illness_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.illness DROP CONSTRAINT illness_pkey;
       public            postgres    false    207            ?
           2606    57456    role role_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.role DROP CONSTRAINT role_pkey;
       public            postgres    false    205            ?
           2606    57478    symptom symptom_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.symptom
    ADD CONSTRAINT symptom_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.symptom DROP CONSTRAINT symptom_pkey;
       public            postgres    false    209            ?
           2606    57445    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    203            ?
           2606    57518    Illness_symptoms fk_illness    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Illness_symptoms"
    ADD CONSTRAINT fk_illness FOREIGN KEY (illness_id) REFERENCES public.illness(id) ON UPDATE CASCADE ON DELETE CASCADE;
 G   ALTER TABLE ONLY public."Illness_symptoms" DROP CONSTRAINT fk_illness;
       public          postgres    false    207    2732    213            ?
           2606    57523    Illness_symptoms fk_symptom    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Illness_symptoms"
    ADD CONSTRAINT fk_symptom FOREIGN KEY (symptom_id) REFERENCES public.symptom(id) ON UPDATE CASCADE ON DELETE CASCADE;
 G   ALTER TABLE ONLY public."Illness_symptoms" DROP CONSTRAINT fk_symptom;
       public          postgres    false    2734    213    209            ?
           2606    57505    symptom fk_symptom_body_part    FK CONSTRAINT     ?   ALTER TABLE ONLY public.symptom
    ADD CONSTRAINT fk_symptom_body_part FOREIGN KEY (body_part_id) REFERENCES public.body_part(id) ON UPDATE CASCADE ON DELETE CASCADE;
 F   ALTER TABLE ONLY public.symptom DROP CONSTRAINT fk_symptom_body_part;
       public          postgres    false    211    209    2736            ?
           2606    57484    user fk_user_role    FK CONSTRAINT     ?   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT fk_user_role FOREIGN KEY (role_id) REFERENCES public.role(id) ON UPDATE CASCADE ON DELETE CASCADE;
 =   ALTER TABLE ONLY public."user" DROP CONSTRAINT fk_user_role;
       public          postgres    false    205    203    2730            @      x?????? ? ?      >      x?????? ? ?      :      x?????? ? ?      8   &   x?3???/?M̉/-N-???2?L?O.?/?????? ??	.      <      x?????? ? ?      6   2   x?3?,H-?ȏ??,I-.qHL*?KJ?4?2??,K??L?O?G??qqq ?L?     