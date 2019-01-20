declare namespace Xuanxuan {
    /**
     * 依赖模块
     */
    interface NodeModules {
        React: {
            Component: typeof React.Component,
            PureComponent: typeof React.PureComponent,
            Fragment: typeof React.Fragment,
            Children: typeof React.Children,
        };
        ReactDOM: Object;
        ReactSplitPane: Object;
        EmojionePicker: Object;
        marked: Object;
        md5: Function;
        fs: Object;
        extractZip: Function;
        emojione: Object;
        DraftJs: Object;
        HTMLParser: Object;
        compareVersions: Function;
        hotkeys: Object;
        pinyin: Object;
        uuid: Object;
        jQuery: Object;
    }

    /**
     * 语言管理模块
     */
    interface Lang {
        /**
         * 数据对象
         * @type {Map<String, String>}
         * @readonly
         */
        data: Object;

        /**
         * 使用参数格式化的文本
         *
         * @param {string} name 配置名称
         * @param {...any} args 格式化参数
         * @return {string} 文本
         */
        format(name: string, ...args: any[]): string;

        /**
         * 根据配置名称获取文本
         * @param  {string} name 配置名称
         * @param  {string} defaultValue 默认文本，如果没有在找到文本则返回此值
         * @return {string} 文本
         */
        string(name: string, defaultValue: string): string;

        /**
         * 绑定语言变更事件
         * @param {function(String)} listener 事件回调函数
         * @return {Symbol} 使用 `Symbol` 存储的事件 ID，用于取消事件
         * @example
         * // 绑定语言变更事件
         * const langChangeHandler = onLangChange(newLang => {
         * });
         *
         * // 取消事件绑定
         * events.off(langChangeHandler);
         */
        onLangChange(listener: Function): Symbol;

        /**
         * 所有语言清单
         * @return {Array<{name: String, label: String}>} 语言清单列表
         */
        getAllLangList(): Array<{name: string, label: string}>;

        /**
         * 是否刚刚变更了语言
         * @return {boolean} 如果为 `true`，则为刚刚变更了语言，否则没有
         */
        isJustLangSwitched(): boolean;

        /**
         * 应用显示名称
         * @param {?String} langName 语言名称
         * @return {String} 语言显示名称
         */
        getLangDisplayName(langName: string): string;
    }

    /**
     * 通用组件库
     */
    interface Components {
        AppAvatar: React.Component,
        Display: React.Component,
        Modal: Object,
        AreaSelector: React.Component,
        Emojione: Object,
        Pager: React.Component,
        Avatar: React.Component,
        HotkeyInputControl: React.Component,
        Popover: React.Component,
        Button: React.Component,
        Icon: React.Component,
        SearchControl: React.Component,
        Checkbox: React.Component,
        ImageCutter: React.Component,
        SelectBox: React.Component,
        ClickOutsideWrapper: React.Component,
        ImageViewer: React.Component,
        Spinner: React.Component,
        ContextMenu: React.Component,
        TabPane: React.Component,
        DisplayContainer: React.Component,
        InputControl: React.Component,
        Tabs: React.Component,
        DisplayLayer: React.Component,
        Messager: React.Component,
    }

    /**
     * 通用工具模块
     */
    interface Utils {
        Color: Object,
        Markdown: Object,
        Status: Object,
        DateHelper: {
            createDate: Function,
            formatDate: Function,
            isSameDay: Function,
            isSameMonth: Function,
            isSameYear: Function,
            isToday: Function,
            isYestoday: Function,
            formatSpan: Function,
            getTimeBeforeDesc: Function,
            createPhpTimestramp: Function,
        },
        MdiFileIcon: Object,
        Store: {
            set: Function,
            get: Function,
            remove: Function,
            clear: Function,
            forEach: Function,
            length: number,
            all: any[]
        },
        Pinyin: Function,
        StringHelper: {
            format: Function,
            isEmpty: Function,
            isNotEmpty: Function,
            formatBytes: Function,
            ifEmptyThen: Function,
        },
        DelayAction: Object,
        Plain: Function,
        TaskQueue: Object,
        HtmlHelper: {
            classes: Function,
            rem: Function,
            getSearchParam: Function,
            strip: Function,
            isWebUrl: Function,
        },
        SearchScore: Object,
        TimeSequence: Function,
        Skin: {
            style: Function,
            text: Function,
            longShadow: Function,
        },
        LimitTimePromise: Function,
        SortHelper: Function,
        Image: Object,
    }

    /**
     * 平台访问模块
     */
    interface Platform {
        /**
         * 平台功能访问对象
         *
         * @readonly
         * @memberof PlatformModule
         * @type {Object}
         */
        modules: Object;

        /**
         * 平台类型名称
         * @type {String}
         * @readonly
         * @memberof PlatformModule
         */
        type: string;

        /**
         * 平台环境变量对象
         * @type {Map<String, any>}
         *
         * @readonly
         * @memberof PlatformModule
         */
        env: Object;

        /**
         * 是否指定的平台类型
         * @param {String} type 平台类型名称
         * @memberof Index
         * @return {boolean} 如果为 `true` 则为指定的平台类型，否则不是
         */
        isType(type: string): boolean;

        /**
         * 使用名称路径调用平台模块方法或者获取属性
         *
         * @param {string|string[]} nameArr 名称路径，使用 '.' 拼接或者使用字符串数组
         * @param {...any} params 调用方法时用到的参数表
         * @returns {any} 返回所调用的方法执行结果
         * @memberof PlatformModule
         */
        call(nameArr: string[] | string, ...params: any): any;

        /**
         * 根据名称路径获取模块内属性值
         *
         * @param {string[] | string} nameArr 名称数组
         * @returns {any} 属性值
         * @memberof PlatformModule
         */
        access(nameArr: string[] | string): any;

        /**
         * 判断平台模块中是否拥有指定的方法或属性定义
         *
         * @param {string[]|string} nameArr 名称数组
         * @returns {boolean} 如果返回 `true` 则为拥有指定的方法或属性定义，否则为没有有指定的方法或属性定义
         * @memberof PlatformModule
         */
        has(nameArr: string[] | string): boolean;
    }

    /**
     * 应用核心模块
     */
    interface App {
        /**
         * 当前用户账号信息
         */
        profile: UserProfile;

        /**
         * 系统成员管理模块
         */
        members: {
            update: Function,
            init: Function,
            get: Function,
            getAll: Function,
            forEach: Function,
            guess: Function,
            query: Function,
            remove: Function,
            getRoleName: Function,
            getDept: Function,
            getDeptsTree: Function,
            deptsSorter: Function,
            onMembersChange: Function,
            map: Object;
            all: Array<Member>;
            depts: Object;
            hasDepts: boolean;
        }

        /**
         * 聊天管理模块
         */
        im: {
            chats: Object,
            ui: Object,
            server: Object,
            notice: Object,
            files: Object,
        };

        /**
         * 数据库访问模块
         */
        db: {
            database: Object,
        };

        /**
         * 服务器访问模块
         */
        server: {
            login: Function,
            logout: Function,
            socket: Function,
            onUserLogin: Function,
            onUserLogout: Function,
            changeUserStatus: Function,
            fetchUserList: Function,
            tryGetTempUserInfo: Function,
        };

        /**
         * 通知管理模块
         */
        notice: {
            update: Function,
            onNoticeUpdate: Function,
            isMatchWindowCondition: Function,
            requestAttention: Function,
        };

        /**
         * 通用事件管理模块
         */
        events: Events;

        /**
         * 界面交互管理模块
         */
        ui: {
            entryParams: Object,
            canQuit: boolean,
            isSmallScreen: boolean,
            showMobileChatsMenu: Function,
            disableGlobalShortcut: Function,
            enableGlobalShortcut: Function,
            onAppLinkClick: Function,
            emitAppLinkClick: Function,
            quit: Function,
            showMessger: Function,
            showContextMenu: Function,
            modal: Object,
            reloadWindow: Function,
            triggerReady: Function,
            onReady: Function,
            isAutoLoginNextTime: Function,
            openUrl: Function,
            getUrlMeta: Function,
            openUrlInDialog: Function,
            openUrlInBrowser: Function,
            openUrlInApp: Function,
            requestUpdateViewStyle: Function,
        };

        /**
         * 实体数据类模块
         */
        models: {
            Entity: FunctionConstructor,
            Member: FunctionConstructor,
            Chat: FunctionConstructor,
            ChatMessage: FunctionConstructor,
            EntitySchema: FunctionConstructor,
        };

        /**
         * 待办管理模块
         */
        todo: {
            createTodo: Function,
            createTodoFromMessage: Function,
        };

        /**
         * 当前登录的用户
         */
        user: User;
    }

    /**
     * 界面视图库
     */
    interface Views {
        chats: {
            ChatAvatar: React.Component,
            ChatTipPopover: React.Component,
            ChatChangeFontPopover: React.Component,
            ChatTitle: React.Component,
            ChatCommittersSettingDialog: React.Component,
            ChatView: React.Component,
            ChatCommittersSetting: React.Component,
            ChatsCache: React.Component,
            ChatCreateDialog: React.Component,
            ChatsDndContainer: React.Component,
            ChatCreateGroups: React.Component,
            ChatsHistoryDialog: React.Component,
            ChatCreate: React.Component,
            ChatsHistory: React.Component,
            ChatHeader: React.Component,
            ChatHistory: React.Component,
            Index: React.Component,
            ChatInviteDialog: React.Component,
            MenuHeader: React.Component,
            ChatInvite: React.Component,
            MenuList: React.Component,
            ChatJoinPublic: React.Component,
            Menu: React.Component,
            ChatListItem: React.Component,
            MessageBroadcast: React.Component,
            ChatMessages: React.Component,
            MessageContentFile: React.Component,
            ChatSearchResult: React.Component,
            MessageContentImage: React.Component,
            ChatSendbox: React.Component,
            MessageContentText: React.Component,
            ChatSidebarFiles: React.Component,
            MessageDivider: React.Component,
            ChatSidebarPeoples: React.Component,
            MessageListItem: React.Component,
            ChatSidebarProfile: React.Component,
            MessageList: React.Component,
            ChatSidebar: React.Component,
            MessagesPreviewDialog: React.Component,
        };

        common: {
            AboutDialog: React.Component,
            MemberProfileDialog: React.Component,
            About: React.Component,
            MemberProfile: React.Component,
            BuildInfo: React.Component,
            Routes: React.Component,
            DraftEditor: React.Component,
            StatusDot: React.Component,
            EmojiPopover: React.Component,
            UserAvatar: React.Component,
            UserChangePasswordDialog: React.Component,
            FileListItem: React.Component,
            UserListItem: React.Component,
            FileListView: React.Component,
            UserProfileDialog: React.Component,
            HotkeySettingDialog: React.Component,
            UserSettingDialog: React.Component,
            MemberListItem: React.Component,
            UserSetting: React.Component,
            MemberList: React.Component,
        };

        exts: {
            AppExtensions: React.Component,
            ExtensionListItem: React.Component,
            AppFiles: React.Component,
            AppHome: React.Component,
            Index: React.Component,
            ExtensionDetailDialog: React.Component,
            WebApp: React.Component,
            ExtensionDetail: React.Component,
        };

        index: {
            Chats: React.Component,
            AppView: React.Component,
            Index: React.Component,
        };

        login: {
            Form: React.Component,
            SwapUserDialog: React.Component,
            Index: React.Component,
            SwapUser: React.Component,
        };

        main: {
            Navbar: React.Component,
            CacheContainer: React.Component,
            Index: React.Component,
            GlobalMessage: React.Component,
            UserMenu: React.Component,
        }
    }

    /**
     * 事件管理模块
     */
    interface Events {
        /**
         * 绑定事件并返回一个 {Sysmbo} 作为事件绑定 ID 用于取消事件
         * @param  {string} event 事件名称
         * @param  {function} listener 事件回调函数
         * @return {Symbol} 事件绑定 ID
         */
        on(event: string, listener: EventListener): Symbol;

        /**
         * 绑定一个一次性事件，触发后会自动取消绑定，只会触发一次
         * @param  {string} event 事件名称
         * @param  {Function} listener 事件回调函数
         * @return {Symbol} 事件绑定 ID
         */
        once(event: string, listener: EventListener): Symbol;

        /**
         * 取消绑定事件
         * @param  {...Symbol} names 要取消的事件 ID
         * @return {void}
         */
        off(...names: Symbol[]): void;

        /**
         * 触发一个事件
         *
         * @param {string} name 要触发的事件名称
         * @param {...any} args 事件参数
         * @memberof Events
         * @return {void}
         */
        emit(name: string, ...args: any[]): void;

        /**
         * 监听通用数据变更事件
         *
         * @param {Function} listener 事件回调函数
         * @return {Symbol} 事件绑定 ID
         */
        onDataChange(listener: EventListener): Symbol;

        /**
         * 触发通用数据变更事件
         *
         * @param {Object<string, any>} data 变更数据表
         * @param {number} delay 事件触发最小延迟时间，单位毫秒
         * @return {void}
         * @memberof Events
         */
        emitDataChange(data: Object, delay?: number): void;
    }

    /**
     * 通用数据实体类
     */
    class Entity {
        /**
         * 实体名称
         * @type {string}
         */
        static NAME: string;

        /**
         * 数据库存储实体属性结构管理器
         *
         * @type {EntitySchema}
         * @static
         */
        static SCHEMA: Object;

        /**
         * 创建一个基础实体类实例
         * @param {!Object<string, any>} data 实体属性对象
         * @param {!string} entityType 实体类型名称
         */
        constructor(data: Object, entityType: string);

        /**
         * 从属性对象更新此实体属性
         *
         * @param {...Object<string, any>} data 属性对象
         * @return {Entity} 返回自身用于链式调用
         */
        assign(...data: Object[]): Entity;

        /**
         * 调用此方法确保实体拥有合适的 GID 属性
         *
         * @return {void}
         */
        ensureGid(): void;

        /**
         * 用于数据存储的简单对象
         *
         * @return {Object<string, any>} 用于的存储对象
         */
        plain(): Object;

        /**
         * 跟踪实体属性变更的 ID，每次更新需要更高此值为一个全局唯一的数字
         * @type {number}
         */
        readonly updateId: number;

        /**
         * 调用此方法将会更新用于跟踪实体属性变更 ID
         *
         * @return {void}
         */
        renewUpdateId(): void;

        /**
         * 实体类型
         * @type {string}
         * @readonly
         */
        readonly entityType: string;

        /**
         *  GID 属性（全局唯一编号）
         * @type {string}
         * @readonly
         */
        readonly gid: string;

        /**
         *  ID 属性
         * @type {number}
         */
        readonly id: string | number;

        /**
         * 数据库存储实体属性结构管理器
         *
         * @readonly
         * @type {EntitySchema}
         */
        readonly schema: Object;

        /**
         * 设置内部数据属性
         * @param {String|Object<string, any>} key 如果为 `string` 则作为要设置的属性名称，如果为 `Object<string, any>` 则作为属性对象批量设置属性值，此时 `val` 参数将会被忽略
         * @param {any} val 当 `key` 如果为 `string` 时要设置的属性值
         * @param {boolean} [ignoreUpdateId=false] 不更新用于跟踪实体属性变更 ID
         * @returns {Entity} 返回自身用于链式调用
         */
        $set(key: string | Object, val?: any, ignoreUpdateId?: boolean): Entity;

        /**
         * 内部数据属性的值
         * @param  {string} key 属性名称
         * @param  {any} defaultValue 默认值
         * @return {any} 内部数据属性值
         */
        $get(key: string, defaultValue: any): any;
    }

    /**
     * 聊天消息类
     */
    class ChatMessage extends Entity {
        /**
         * 实体名称
         * @type {string}
         */
        static NAME: string;

        /**
         * 聊天消息状态管理器
         *
         * @static
         * @type {Status}
         */
        static STATUS: Object;

        /**
         * 聊天消息类型表
         * @type {Object<string,string>}
         * @static
         */
        static TYPES: Object;

        /**
         * 聊天消息内容类型表
         * @type {Object<string,string>}
         * @static
         */
        static CONTENT_TYPES: Object;

        /**
         * 聊天消息对象内容类型表
         * @type {Object<string,string>}
         * @static
         */
        static OBJECT_TYPES: Object;

        /**
         * 数据库存储实体属性结构管理器
         *
         * @type {EntitySchema}
         * @static
         */
        static SCHEMA: Object;

        /**
         * 创建一个聊天消息类实例
         * @param {Object<string,any>} data 聊天消息属性对象
         */
        constructor(data: Object);

        /**
         * 用于发送到服务器的数据简单对象
         *
         * @return {Object<string,any>} 简单对象
         */
        plainServer(): Object;

        /**
         * 数据库存储实体属性结构管理器
         *
         * @readonly
         * @type {EntitySchema}
         */
        readonly schema: Object;

        /**
         *  ID 属性值
         * @type {number}
         */
        readonly id: string;

        /**
         * 排序序号
         * @type {number}
         */
        readonly order: number;

        /**
         * 状态值
         * @readonly
         * @type {number}
         */
        readonly status: number;

        /**
         * 状态名称
         * @readonly
         * @type {string}
         */
        readonly statusName: string;

        /**
         * 判断当前状态是否是给定的状态
         * @param {number|string} status 要判断的状态值或状态名称
         * @return {boolean} 如果为 `true` 则为给定的状态，否则不是
         */
        isStatus(status: number | string): boolean;

        /**
         * 是否发送失败
         * @type {boolean}
         * @readonly
         */
        readonly isSendFail: boolean;

        /**
         * 是否发送成功
         * @type {boolean}
         * @readonly
         */
        readonly isOK: boolean;

        /**
         * 是否已发送正在等待服务器结果
         * @type {boolean}
         * @readonly
         */
        readonly isSending: boolean;

        /**
         * 是否是草稿状态（未发送）
         * @type {boolean}
         * @readonly
         */
        readonly isDraft: boolean;

        /**
         * 标记为开始发送状态
         *
         * @return {void}
         */
        beginSend(): void;

        /**
         * 标记为结束发送
         *
         * @param {*} remoteId 服务器存储 ID，如果为 `0`，表示发送失败（没有在服务器上存储）
         * @return {void}
         */
        endSend(remoteId: string): void;

        /**
         * 全局唯一标识字符串 GID
         * @type {string}
         */
        readonly cgid: string;

        /**
         * 是否处于未读状态
         * @type {boolean}
         */
        readonly unread: boolean;

        /**
         * 是否删除（已撤销）
         * @type {boolean}
         */
        readonly deleted: boolean;

        /**
         * 判断当前消息是否能够删除
         * @param {String|number} 当前用户 ID
         * @returns {boolean} 如果返回 `true` 则能够删除，否则为不能删除
         */
        canDelete(userID: string | number): boolean;

        /**
         * 消息额外存储数据
         * @type {Object}
         */
        readonly data: Object;

        /**
         * 消息额外数据属性值
         *
         * @param {String} name 属性名称
         * @param {any} defaultValue 默认值
         * @return {any} 属性值
         */
        getDataValue(name: string, defaultValue?: any): any;

        /**
         * 设置消息额外属性值
         * @param {String|Map<String, any>} name 属性名称
         * @param {?any} value 属性值
         * @return {void}
         */
        setDataValue(name: string, value: any): void;

        /**
         * 消息发送日期时间戳
         * @type {number}
         */
        readonly date: number;

        /**
         * 消息发送日期时间戳，相当于读取 `date` 属性
         * @type {number}
         */
        readonly sendTime: number;

        /**
         * 消息发送者 ID
         * @type {number}
         */
        readonly senderId: number;

        /**
         * 判断给定的成员 ID 是否是当前消息发送者
         *
         * @param {number} userId 成员 ID
         * @returns {boolean} 如果返回 `true` 则为是当前消息发送者，否则为不是当前消息发送者
         */
        isSender(userId: number): boolean;

        /**
         * 消息发送者成员对象
         * @type {Member}
         */
        readonly sender: Member;

        /**
         * 从系统获取消息发送成员对象
         *
         * @param {{get: function(id: number):Member}} appMembers 用于从系统获取成员信息的辅助对象
         * @return {Member} 消息发送成员
         */
        getSender(appMembers: {get: Function}): Member;

        /**
         * 消息内容类型
         * @type {string}
         */
        readonly contentType: string;

        /**
         * 消息内容是否是文件
         * @type {boolean}
         * @readonly
         */
        readonly isFileContent: boolean;

        /**
         * 消息内容是否是文本
         * @type {boolean}
         * @readonly
         */
        readonly isTextContent: boolean;

        /**
         * 消息内容是否是纯文本
         * @type {boolean}
         * @readonly
         */
        readonly isPlainTextContent: boolean;

        /**
         * 消息内容是否是图片
         * @type {boolean}
         * @readonly
         */
        readonly isImageContent: boolean;

        /**
         * 消息内容是否是对象
         * @type {boolean}
         * @readonly
         */
        readonly isObjectContent: boolean;

        /**
         * 内容对象类型
         * @readonly
         * @type {string}
         */
        readonly objectContentType: string;

        /**
         * 内容对象
         * @readonly
         * @type {Object<string, any>}
         */
        readonly objectContent: Object;
        /**
         * 消息类型
         * @type {string}
         */
        readonly type: string;

        /**
         * 消息类型是否为广播
         * @type {boolean}
         * @readonly
         */
        readonly isBroadcast: boolean;

        /**
         * 原始内容字符串
         * @type {string}
         */
        readonly content: string;

        /**
         * 将文本消息渲染为 HTML 格式
         *
         * @param {...function(content: string, options: Object<string,any>)} converters 格式转换函数
         * @return {string} 转换后的 HTML 字符串
         */
        renderedTextContent(...converters: Function[]): string;

        /**
         * 是否块级富文本消息（至少包含一个 3 级以上的标题）
         * @type {boolean}
         */
        readonly isBlockContent: boolean;

        /**
         * 图片内容对象
         * @type {Object<string,any>}
         */
        readonly imageContent: Object;

        /**
         * 更新图片内容对象
         *
         * @param {Object} content 图片内容对象
         * @return {void}
         */
        updateImageContent(content: Object): void;

        /**
         * 文件内容对象
         * @type {Object<string,any>}
         */
        readonly fileContent: Object;

        /**
         * 更新文件内容对象
         *
         * @param {Object} content 文件内容对象
         * @return {void}
         */
        updateFileContent(content: Object): void;

        /**
         * 消息指令对象
         *
         * @return {{action: string}} 消息指令对象
         */
        getCommand(): {action: string};

        /**
         * 重置实体属性
         *
         * @param {Object} newData 属性对象
         * @return {void}
         */
        reset(newData: Object): void;

        /**
         * 检查消息是否需要检查重新发送
         * @type {boolean}
         * @readonly
         */
        readonly needCheckResend: boolean;

        /**
         * 判断消息是否发送失败并且需要重新发送
         * @type {boolean}
         * @readonly
         */
        readonly needResend: boolean;

        /**
         * 是否发送失败
         * @type {boolean}
         * @readonly
         */
        readonly isSendFailed: boolean;

        /**
         * 检查消息是否过期（在一定时间内没有收到服务器回应的远程存储 ID）
         * @type {boolean}
         * @readonly
         */
        readonly isOutdated: boolean;

        /**
         * 创建一个聊天消息类实例
         *
         * @static
         * @param {Object<string,any>|ChatMessage} chatMessage 聊天消息属性对象或者聊天消息实例
         * @return {ChatMessage} 聊天消息类实例
         */
        static create(chatMessage: Object | ChatMessage): ChatMessage;
        /**
         * 对聊天消息列表进行排序
         * @param  {ChatMessage[]} messages 要排序的聊天列表
         * @return {ChatMessage[]} 排序后的聊天列表
         * @static
         */
        static sort(messages: ChatMessage[]): ChatMessage[];
    }

    /**
     * 聊天类
     */
    class Chat extends Entity {
        /**
         * 实体名称
         * @type {string}
         */
        static NAME: string;

        /**
         * 成员状态管理器
         *
         * @static
         * @type {Status}
         */
        static STATUS: Object;

        /**
         * 聊天类型表
         * @type {Object<string,string>}
         * @static
         */
        static TYPES: Object;

        /**
         * 白名单类型表
         * @type {Object<string,string>}
         * @static
         */
        static COMMITTERS_TYPES: Object;

        /**
         * 数据库存储实体属性结构管理器
         *
         * @type {EntitySchema}
         * @static
         */
        static SCHEMA: Object;

        /**
         * 创建一个聊天类实例
         * @param {Object<string,any>} data 聊天属性对象
         */
        constructor(data: Object);

        /**
         * 最大聊天消息排序编号
         * @type {number}
         */
        readonly maxMsgOrder: number;

        /**
         * 递增最大聊天消息排序编号
         * @return {number} 最大聊天消息排序编号
         */
        newMsgOrder(): number;

        /**
         * 调用此方法确保实体拥有合适的 GID 属性
         *
         * @return {void}
         * @override
         */
        ensureGid(): void;

        /**
         * 数据库存储实体属性结构管理器
         *
         * @readonly
         * @type {EntitySchema}
         */
        readonly schema: Object;

        /**
         *  ID 属性值
         * @type {number}
         */
        readonly id: string;

        /**
         * 状态值
         * @readonly
         * @type {number}
         */
        readonly status: string;

        /**
         * 状态名称
         * @readonly
         * @type {string}
         */
        readonly statusName: string;

        /**
         * 判断当前状态是否是给定的状态
         * @param {number|string} status 要判断的状态值或状态名称
         * @return {boolean} 如果为 `true` 则为给定的状态，否则不是
         */
        isStatus(status: number | string): boolean;

        /**
         * 判断当前状态是否是正常状态
         * @return {boolean} 如果为 `true` 则为正常状态，否则不是
         */
        readonly isOK: boolean;

        /**
         * 聊天类型
         * @type {string}
         */
        readonly type: string;

        /**
         * 是否为机器人聊天类型
         * @type {boolean}
         */
        readonly isRobot: boolean;

        /**
         * 是否一对一聊天类型
         * @type {boolean}
         */
        readonly isOne2One: boolean;

        /**
         * 是否为已删除的一对一聊天
         * @type {boolean}
         */
        readonly isDeleteOne2One: boolean;

        /**
         * 是否讨论组
         * @type {boolean}
         */
        readonly isGroup: boolean;

        /**
         * 聊天分组
         * @type {string}
         */
        readonly category: string;

        /**
         * 聊天名称
         * @type {string}
         */
        readonly name: string;

        /**
         * 聊天显示名称，如果是一对一聊天则返回对方成员名称，否则返回聊天 `name` 属性值
         * @param {{members: {get: function(id: number):Member}}} app 用于获取系统成员的辅助对象
         * @param {boolean} [includeMemberCount=false] 是否包含聊天成员数目
         * @return {string} 聊天名称
         */
        getDisplayName(app: {members: {get: Function}}, includeMemberCount?: boolean): string;

        /**
         * 聊天名称的拼音字符串（用于排序或搜索）
         *
         * @param {{members: {get: function(id: number):Member}}} app 用于获取系统成员的辅助对象
         * @return {string} 拼音字符串
         */
        getPinYin(app: {members: {get: Function}}): string;

        /**
         * 是否已收藏此聊天
         * @type {boolean}
         */
        readonly star: boolean;

        /**
         * 是否已设置为免打扰
         * @type {boolean}
         */
        readonly mute: boolean;

        /**
         * 是否已经隐藏（存档）此聊天，相当于读取 `hide` 属性
         * @type {boolean}
         */
        readonly hidden: boolean;

        /**
         * 是否已经隐藏（存档）此聊天
         * @type {boolean}
         */
        readonly hide: boolean;

        /**
         * 是否已设为公开聊天
         * @type {boolean}
         */
        readonly public: boolean;

        /**
         * 聊天创建时间戳
         * @type {number}
         */
        readonly createdDate: number;

        /**
         * 聊天解散时间戳
         * @type {number}
         */
        readonly dismissDate: number;

        /**
         * 是否已经解散此聊天
         * @type {boolean}
         */
        readonly isDismissed: boolean;

        /**
         * 判断指定的用户是否能够解散此聊天
         *
         * @param {Member|{id: number}|{account: string}} user 成员对象
         * @returns {boolean} 如果返回 `true` 则可以解散，否则为不是
         */
        canDismiss(user: Member | {id: number} | {account: string}): boolean;

        /**
         * 聊天管理员集合
         * @type {Set<string|number>}
         */
        readonly admins: Set<string | number>;

        /**
         * 判断给定的成员是否是此聊天的管理员
         *
         * @param {Member|{id: number}|{account: string}} member 成员对象
         * @returns {boolean} 如果为 `true` 则为是此聊天管理员，否则为不是
         */
        isAdmin(member: Member | {id: number} | {account: string}): boolean;

        /**
         * 向此聊天添加一个新的管理员
         *
         * @param {number} memberId 要做为新管理员的 ID
         * @return {void}
         */
        addAdmin(memberId: number): void;

        /**
         * 白名单设置
         * @type {Set<string>}
         */
        readonly committers: Set<string>;

        /**
         * 白名单类型
         * @type {string}
         */
        readonly committersType: string;

        /**
         * 判断给定的用户是否在白名单中
         *
         * @param {number|{id: number}} member 用户 ID 或者用户对象
         * @returns {boolean} 如果返回 `true` 则为在白名单中，否则为不在
         */
        isCommitter(member: number | {id: number}): boolean;

        /**
         * 判断给定的成员是否是能够重命名此聊天
         *
         * @param {Member|{id: number}|{account: string}} user 成员对象
         * @returns {boolean} 如果为 `true` 则能够重命名此聊天，否则为不能
         */
        canRename(user: Member | {id: number} | {account: string}): boolean;

        /**
         * 判断给定的成员是否是能够邀请其他成员参与此聊天
         *
         * @param {Member|{id: number}|{account: string}} user 成员对象
         * @returns {boolean} 如果为 `true` 则能够邀请其他成员参与此聊天，否则为不能
         */
        canInvite(user: Member | {id: number} | {account: string}): boolean;

        /**
         * 判断给定的成员是否是能够将聊天内成员移除此聊天
         *
         * @param {!(Member|{id: number}|{account: string})} user 成员对象
         * @param {!(Member|{id: number}|{account: string})} kickOfWho 要移除的成员对象
         * @returns {boolean} 如果为 `true` 则能够将聊天内成员移除此聊天，否则为不能
         */
        canKickOff(user: Member | {id: number} | {account: string}, kickOfWho: Member | {id: number} | {account: string}): boolean;

        /**
         * 判断给定的成员是否是能够将聊天设置为公开或者取消公开设置
         *
         * @param {Member|{id: number}|{account: string}} user 成员对象
         * @returns {boolean} 如果为 `true` 则能够将聊天设置为公开或者取消公开设置，否则为不能
         */
        canMakePublic(user: Member | {id: number} | {account: string}): boolean;

        /**
         * 判断给定的成员是否是能够修改此聊天的白名单
         *
         * @param {Member|{id: number}|{account: string}} user 成员对象
         * @returns {boolean} 如果为 `true` 则能够修改此聊天的白名单，否则为不能
         */
        canSetCommitters(user: Member | {id: number} | {account: string}): boolean;

        /**
         * 判断此聊天对于指定的用户是否只读（无法发送消息）
         *
         * @param {Member|{id: number}|{account: string}} member 成员对象
         * @returns {boolean} 如果为 `true` 则为只读，否则不是
         */
        isReadonly(member: Member | {id: number} | {account: string}): boolean;

        /**
         * 是否可见
         * @type {boolean}
         */
        readonly visible: boolean;

        /**
         * 可见的日期
         * @type {number}
         */
        readonly visibleDate: number;

        /**
         * 是否设置有白名单
         * @type {boolean}
         */
        readonly hasWhitelist: boolean;

        /**
         * 此聊天的白名单
         * @type {string}
         */
        readonly whitelist: string;

        /**
         * 判断给定的用户 ID 是否在白名单中
         *
         * @param {number} memberId 用户 ID
         * @param {?Set<number>} whitelist 白名单
         * @returns {boolean} 如果返回 `true` 则为在白名单中，否则为不在
         */
        isInWhitelist(memberId: number, whitelist: Set<number>): boolean;

        /**
         * 将给定的用户 ID 添加到白名单中
         *
         * @param {number} memberId 用户 ID
         * @returns {boolean} 如果返回 `true` 则为添加成功，否则为添加失败
         */
        addToWhitelist(memberId: number): boolean;

        /**
         * 将给定的用户 ID 从白名单中移除
         *
         * @param {number} memberId 用户 ID
         * @returns {boolean} 如果返回 `true` 则为移除成功，否则为移除失败
         */
        removeFromWhitelist(memberId: number): boolean;

        /**
         * 聊天的创建者用户名
         * @type {string}
         */
        readonly createdBy: string;

        /**
         * 聊天成员 ID 集合
         * @type {Set<number>}
         */
        readonly members: string;

        /**
         * 判断给定的成员 ID 是否在此聊天成员集合中
         *
         * @param {number|{id: number}} memberId 聊天成员对象或者成员 ID
         * @returns {boolean} 如果返回 `true` 则为在此聊天成员集合中，否则为不在
         */
        isMember(memberId: number | {id: number}): boolean;

        /**
         * 设置聊天成员
         * @param {Member[]} members 聊天成员
         * @return {void}
         */
        resetMembers(members: Member[]): void;

        /**
         * 将成员添加到聊天中
         *
         * @param {...Member} newMembers 新到成员
         * @return {void}
         */
        addMember(...newMembers: Member[]): void;

        /**
         * 从系统更新聊天成员列表
         *
         * @param {{get: function(id: number):Member}} appMembers 用于从系统获取成员信息的辅助对象
         * @return {void}
         */
        updateMembersSet(appMembers: {get: Function}): void;

        /**
         * 聊天成员数目
         *
         * @param {{get: function(id: number):Member}} appMembers 用于从系统获取成员信息的辅助对象
         * @return {number} 成员数目
         */
        getMembersCount(appMembers: {get: Function}): number;

        /**
         * 从系统获取聊天成员列表
         *
         * @param {{get: function(id: number):Member}} appMembers 用于从系统获取成员信息的辅助对象
         * @return {Member[]} 聊天成员列表
         */
        getMembersSet(appMembers: {get: Function}): Member[];

        /**
         * 聊天成员中除了我之外的其他用户 ID
         * @param {String|number} currentUserID 当前用户 ID
         * @return {Array<String|number>} 返回其他用户ID列表
         */
        getOtherMembersID(currentUserID: string | number): Array<string | number>;

        /**
         * 一对一聊天对方成员
         *
         * @param {{members: {get: function(id: number):Member}}} app 用于获取系统成员的辅助对象
         * @return {Member} 对方成员对象
         */
        getTheOtherOne(app: {members: {get: Function}}): Member;

        /**
         * 判断聊天是否在线，如果是一对一聊天则判断对方成员状态是否在线，如果是其他聊天则直接判定为在线
         *
         * @param {{members: {get: function(id: number):Member}}} app 用于获取系统成员的辅助对象
         * @returns {boolean} 如果为 `true` 则为在线，否则为不在线
         */
        isOnline(app: {members: {get: Function}}): boolean;

        /**
         * 判断给定的用户是否是聊天的创建者
         *
         * @param {Member|{id: number}|{account: string}} user 聊天成员对象
         * @returns {boolean} 如果返回 `true` 则为是聊天的创建者，否则为不是聊天的创建者
         */
        isOwner(user: Member | {id: number} | {account: string}): boolean;

        /**
         * 是否能够让其他成员自由加入
         * @readonly
         * @type {boolean}
         */
        readonly canJoin: boolean;

        /**
         * 判断给定的用户是否能够退出讨论组
         *
         * @param {Member|{id: number}|{account: string}} user 聊天成员对象
         * @returns {boolean} 如果返回 `true` 则为能够退出讨论组，否则为不能够退出讨论组
         */
        canExit(user: Member | {id: number} | {account: string}): boolean;

        /**
         * 是否隐藏此聊天
         * @readonly
         * @type {boolean}
         */
        readonly canHide: boolean;

        /**
         * 是否是系统聊天
         * @type {boolean}
         */
        readonly isSystem: boolean;

        /**
         * 是否是讨论组或系统聊天
         * @type {boolean}
         */
        readonly isGroupOrSystem: boolean;

        /**
         * 此聊天的未读消息数目
         * @type {number}
         */
        readonly noticeCount: number;

        /**
         * 清除此聊天的未读消息数目
         *
         * @return {ChatMessage[]} 已新标记为已读的消息清单
         */
        muteNotice(): void;

        /**
         * 此聊天是否已被设置为免打扰或者隐藏（已存档）
         * @readonly
         * @type {boolean}
         */
        readonly isMuteOrHidden: boolean;

        /**
         * 此聊天缓存的消息列表
         * @readonly
         * @type {ChatMessage[]}
         */
        readonly messages: ChatMessage[];

        /**
         * 上次在界面上激活的时间戳
         * @type {number}
         */
        readonly lastActiveTime: number;

        /**
         * 将聊天设置已激活
         * @return {void}
         */
        makeActive(): void;

        /**
         * 是否有缓存消息
         * @type {boolean}
         */
        readonly hasSetMessages: boolean;

        /**
         * 将聊天消息添加到缓存
         *
         * @param {ChatMessage[]} messages 要缓存的聊天列表
         * @param {number} userId 用户 ID
         * @param {boolean} [localMessage=false] 是否来源于本地数据消息
         * @param {boolean} [skipOld=false] 是否忽略已缓存的消息
         * @returns {Chat} 返回自身用于链式调用
         */
        addMessages(messages: ChatMessage[], userId: number, localMessage?: boolean, skipOld?: boolean): Chat;

        /**
         * 缓存中最新的一个聊天消息
         * @type {ChatMessage}
         */
        readonly lastMessage: ChatMessage;

        /**
         * 从缓存中移除指定 GID 的聊天消息
         *
         * @param {string} messageGid 聊天消息 GID
         * @returns {boolean} 如果返回 `true` 则移除成功，否则为移除失败（可能是未找到指定的聊天消息）
         */
        removeMessage(messageGid: string): boolean;

        /**
         * 是否已经从数据库加载完所有消息到缓存
         * @type {boolean}
         */
        readonly isLoadingOver: boolean;

        /**
         * 是否是第一次从数据库加载消息
         * @type {boolean}
         */
        readonly isFirstLoaded: boolean;

        /**
         * 创建一个聊天类实例
         *
         * @static
         * @param {Object<string,any>|Chat} chat 聊天属性对象或者聊天实例
         * @return {Chat} 聊天类实例
         */
        static create(chat: Chat | Object): Chat;

        /**
         * 对聊天列表进行排序，排序规则 `orders` 可以为以下值：
         * - `function(c1: Member, c2: Member):number`，自定义排序函数；
         * - 一个用逗号分隔的根据属性排序的属性名称表；
         * - 根据属性排序的属性名称表数组。
         * 默认的排序规则为：`['star', 'notice', 'hide', 'mute', 'lastActiveTime', 'online', 'createDate', 'name', 'id']`。
         * @param  {Chat[]} chats 要排序的聊天列表
         * @param  {array|string|function(c1: Chat, c2: Chat):number}  orders 排序规则
         * @param  {{members: {get: function(id: number):Member}}} app 用于获取系统成员的辅助对象
         * @return {Chat[]} 排序后的聊天列表
         */
        static sort(chats: Chat[], orders: string | Function | Array<string | Function>, app: {members: {get: Function}}): Chat[];
    }

    /**
     * 系统成员类
     */
    class Member extends Entity {
        /**
         * 实体名称
         * @type {string}
         */
        static NAME: string;

        /**
         * 成员状态管理器
         *
         * @static
         * @type {Status}
         */
        static STATUS: Object;

        /**
         * 数据库存储实体属性结构管理器
         *
         * @type {EntitySchema}
         * @static
         */
        static SCHEMA: Object;

        /**
         * 创建一个成员类实例
         * @param {Object<string, any>} data 成员属性对象
         */
        constructor(data: Object);

        /**
         * 数据库存储实体属性结构管理器
         *
         * @readonly
         * @type {EntitySchema}
         */
        readonly schema: Object;

        /**
         * 是否已经删除
         * @type {boolean}
         */
        readonly isDeleted: boolean;

        /**
         * 状态值
         * @type {number}
         */
        readonly status: number;

        /**
         * 状态名称
         * @type {string}
         * @readonly
         */
        readonly statusName: string;

        /**
         * 是否状态为在线
         * @type {boolean}
         * @readonly
         */
        readonly isOnline: boolean;

        /**
         * 是否状态是否为离线
         * @type {boolean}
         * @readonly
         */
        readonly isOffline: boolean;

        /**
         * 是否状态是否为忙碌
         * @type {boolean}
         * @readonly
         */
        readonly isBusy: boolean;

        /**
         * 判断当前状态是否是给定的状态
         * @param {number|string} status 要判断的状态值或状态名称
         * @return {boolean} 如果为 `true` 则为给定的状态，否则不是
         */
        isStatus(status: number | string): boolean;

        /**
         * 判断成员账号是否为给定的值
         *
         * @param {string} account 要判断的用户名
         * @return {boolean} 如果为 `true` 则为给定的值，否则不是
         */
        isMember(account: string): boolean;

        /**
         * 性别
         * @type {string}
         */
        readonly gender: string;

        /**
         * 部门编号
         * @type {number}
         */
        readonly dept: string;

        /**
         * 从系统获取部门信息
         * @param {{members: {getDept: function(dept: number):Object}}} app 用于获取系统部门信息的辅助对象
         * @return {Object} 部门信息对象
         */
        getDept(app: {members: {getDept: Function}}): Object;

        /**
         * 部门名称
         *
         * @param {{members: {getDept: function(dept: number):Object}}} app 用于获取系统部门信息的辅助对象
         * @return {string} 部门名称
         */
        getDeptName(app: {members: {getDept: Function}}): string;

        /**
         * 部门完整名称
         *
         * @param {{members: {getDept: function(dept: number):Object}}} app 用于获取系统部门信息的辅助对象
         * @returns {string} 部门完整名称
         */
        getDeptFullName(app: {members: {getDept: Function}}): string;

        /**
         * 是否为超级管理员
         * @type {boolean}
         * @readonly
         */
        readonly isSuperAdmin: boolean;

        /**
         * 是否为管理员
         * @type {boolean}
         * @readonly
         */
        readonly isAdmin: boolean;

        /**
         * 用户真实姓名的多语言配置
         *
         * @readonly
         */
        readonly realnames: string;

        /**
         * 用户用户真实姓名
         * @type {string}
         */
        readonly realname: string;

        /**
         * 用户账号
         * @type {string}
         * @readonly
         */
        readonly account: string;

        /**
         * 用户头像图片地址
         * @type {string}
         * @readonly
         */
        readonly avatar: string;

        /**
         * 用户电话号码
         * @type {string}
         * @readonly
         */
        readonly phone: string;

        /**
         * 用户移动电话
         * @type {string}
         * @readonly
         */
        readonly mobile: string;

        /**
         * 用户电子邮件地址
         * @type {string}
         * @readonly
         */
        readonly email: string;

        /**
         * 从系统获取用户头像图片地址
         *
         * @param {string} serverUrl 服务器地址
         * @return {string} 用户头像图片地址
         */
        getAvatar(serverUrl: string): string;

        /**
         * 用户角色代号
         * @type {string}
         * @readonly
         */
        readonly role: string;

        /**
         * 从系统获取角色名称
         *
         * @param {{members: {getRoleName: function(role: string):string}}} app 用于获取系统部门信息的辅助对象
         * @return {string} 角色名称
         */
        getRoleName(app: {members: {getRoleName: Function}}): string;

        /**
         * 限时名称
         * @type {string}
         * @readonly
         */
        readonly displayName: string;

        /**
         * 用户显示名称的拼音字符串（通常用于检索和排序）
         * @readonly
         * @type {string}
         */
        readonly namePinyin: string;

        /**
         * 成员与给定的关键字匹配分值
         * @param {string[]} keys 关键字列表
         * @return {number} 匹配的分值
         */
        getMatchScore(keys: string[]): number;

        /**
         * 创建一个成员实例
         *
         * @static
         * @param {Objec|Member} member 成员属性对象
         * @return {Member} 成员实例
         */
        static create(member: Object | Member): Member;

        /**
         * 对成员列表进行排序，排序规则 `orders` 可以为以下值：
         * - `function(m1: Member, m2: Member):number`，自定义排序函数；
         * - 一个用逗号分隔的根据属性排序的属性名称表；
         * - 根据属性排序的属性名称表数组。
         * 默认的排序规则为：`['me', 'status', '-namePinyin', '-id']`。
         * @param  {Member[]} members 要排序的成员列表
         * @param  {array|string|function(m1: Member, m2: Member):number}  orders 排序规则
         * @param  {{id: number}|number} userMe 当前登录的用户 ID 或者用户对象
         * @return {Member[]} 排序后的成员列表
         * @static
         */
        static sort(members: Member[], orders: Array<string | Function> | string | Function, userMe: {id: number} | number): Member[];
    }

    /**
     * 用户类
     */
    class User extends Member {
        /**
         * 事件表
         * @type {Object<string, string>}
         * @static
         */
        static EVENT: Object;

        /**
         * 数据库存储实体属性结构管理器
         *
         * @type {EntitySchema}
         * @static
         */
        static SCHEMA: Object;

        /**
         * 用户状态管理器
         *
         * @type {Status}
         * @static
         */
        static STATUS: Object;

        /**
         * 创建一个用户类实例
         * @param {Object<string, any>} data 属性对象
         */
        constructor(data: Object);

        /**
         * 用户类数据库存储实体属性结构管理器
         *
         * @readonly
         * @type {EntitySchema}
         */
        readonly schema: string;

        /**
         * 判定当前用户事件机制是否可用
         *
         * @readonly
         * @type {boolean}
         */
        readonly isEventsEnable: boolean;

        /**
         * 当前用户实例存储数据对象
         *
         * @return {Object<string, any>} 数据对象
         */
        plain(): Object;

        /**
         * 将用户保存到本地存储
         *
         * @return {void}
         */
        save(): void;

        /**
         * 判定用户是否在今天第一次进行登录
         *
         * @readonly
         * @type {boolean}
         */
        readonly isFirstSignedToday: string;

        /**
         * 判定用户是否成功登录过
         *
         * @type {boolean}
         */
        readonly signed: boolean;

        /**
         * 用户个人配置数据
         *
         * @readonly
         * @return {Object<string, any>} 配置数据对象
         */
        readonly config: Object;

        /**
         * 判断用户状态是否处于离线状态
         *
         * @readonly
         * @return {boolean} 如果为 `true` 则表示用户处于离线状态，否则为为通过验证或在线状态
         */
        readonly isDisconnect: boolean;

        /**
         * 判断用户状态是否处于未通过验证状态
         *
         * @readonly
         * @return {boolean} 如果为 `true` 则表示用户处于未通过验证状态
         */
        readonly isUnverified: boolean;

        /**
         * 判断用户状态是否处于已通过验证状态
         *
         * @readonly
         * @return {boolean}
         */
        readonly isVertified: boolean;

        /**
         * 判断用户状态是否处于已登录状态
         *
         * @readonly
         * @return {boolean}
         */
        readonly isLogined: boolean;

        /**
         * 将用户登录状态设置为离线状态
         *
         * @return {void}
         */
        markDisconnect(): void;

        /**
         * 将用户登录状态设置为未通过验证状态
         *
         * @return {void}
         */
        markUnverified(): void;

        /**
         * 判断用户状态是否处于正在登录中状态
         *
         * @readonly
         * @return {boolean}
         */
        readonly isLogging: boolean;

        /**
         * 标记用户正在开始登录操作
         *
         * @return {void}
         */
        beginLogin(): void;

        /**
         * 标记用户已结束登录操作
         *
         * @param {boolean} result 是否登录成功
         * @return {void}
         */
        endLogin(result: boolean): void;

        /**
         * 用户可用的 Session ID
         *
         * @type {string}
         */
        readonly sessionID: string;

        /**
         * 用户登录的服务器地址（以 URL 实例形式）
         *
         * @type {URL}
         */
        readonly server: URL;

        /**
         * 用户登录的服务器地址（以字符串形式）
         *
         * @readonly
         * @type {string}
         */
        readonly serverUrl: string;

        /**
         * 然之服务器地址
         *
         * @type {string}
         */
        readonly ranzhiUrl: string;

        /**
         *  XXD 服务器端口号
         *
         * @readonly
         * @type {string}
         */
        readonly webServerPort: string;

        /**
         * 要登录的 XXD 服务器名称
         *
         * @readonly
         * @type {string}
         */
        readonly serverName: string;

        /**
         * 请求 XXD 服务器信息 URL 地址
         *
         * @readonly
         * @type {string}
         */
        readonly webServerInfoUrl: string;

        /**
         *  Socket 服务器端口
         *
         * @type {string}
         */
        readonly socketPort: string;

        /**
         *  Socket 服务连接地址
         *
         * @type {string}
         */
        readonly socketUrl: string;

        /**
         * 服务器版本
         *
         * @type {string}
         */
        readonly serverVersion: string;

        /**
         * 服务器地址根路径
         *
         * @type {string}
         */
        readonly serverUrlRoot: string;

        /**
         * 拼接 http 服务器请求地址
         * @param {string} [path=''] 请求路径
         * @return {void}
         */
        makeServerUrl(path?: string): void;

        /**
         * 上传文件请求地址
         *
         * @type {string}
         */
        readonly uploadUrl: string;

        /**
         * 用户标识字符串
         *
         * @type {string}
         */
        readonly identify: string;

        /**
         *  Socket 加密 Token 字符串
         *
         * @type {string}
         */
        readonly token: string;

        /**
         *  Socket 服务 AES 加密向量
         *
         * @type {string}
         */
        readonly cipherIV: string;

        /**
         * 最大允许文件上传大小
         *
         * @type {number}
         */
        readonly uploadFileSize: number;

        /**
         * 上次登录的时间戳
         *
         * @type {number}
         * @readonly
         */
        readonly lastLoginTime: number;

        /**
         * 是否已设置为自动登录
         *
         * @type {boolean}
         */
        readonly autoLogin: boolean;

        /**
         * 是否设置为记住密码
         *
         * @type {boolean}
         */
        readonly rememberPassword: boolean;

        /**
         * 是否开启 LDAP 登录模式
         *
         * @type {boolean}
         */
        readonly ldap: boolean;

        /**
         * 用户头像图片地址
         *
         * @type {string}
         */
        readonly avatar: string;

        /**
         * 是否从没有成功登录过
         *
         * @type {boolean}
         * @readonly
         */
        readonly isNeverLogined: string;

        /**
         * 用户密码
         *
         * @type {string}
         */
        readonly password: string;

        /**
         * 包含 MD5 前缀的密码
         *
         * @type {string}
         */
        readonly passwordMD5WithFlag: string;

        /**
         * 用于登录验证的密码
         *
         * @type {string}
         * @readonly
         */
        readonly passwordForServer: string;

        /**
         *  MD5 算法加密后的密码
         *
         * @type {string}
         * @readonly
         */
        readonly passwordMD5: string;

        /**
         * 检查当前版本是否支持特定功能
         *
         * @param {string} name 功能名称
         * @return {boolean}
         */
        isVersionSupport(name: string): boolean;

        /**
         * 创建一个用户实例
         *
         * @static
         * @param {Object|User} user 用户数据对象
         * @return {User}
         */
        static create(user: Object | User): User;

        /**
         * 创建用户唯一识别标识字符串
         *
         * @static
         * @param {string} server 用户登录的服务器地址
         * @param {string} account 用户账号
         * @return {string}
         */
        static createIdentify(server: string, account: string): string;
    }

    /**
     * 当前用户账号访问模块
     */
    interface UserProfile {
        EVENT: Object;
        createUser: Function;
        onSwapUser: Function;
        onUserStatusChange: Function;
        onUserConfigChange: Function;
        onUserConfigRequestUpload: Function;
        getLastSavedUser: Function;
        isCurrentUser: Function;
        readonly user: User;
        readonly userId: number | string;
        readonly isUserOnline: boolean;
        readonly isUserVertified: boolean;
        readonly userStatus: number;
        readonly userConfig: Object;
        readonly userAccount: string;
    }

    /**
     * 界面主题管理类
     */
    class Theme {
        /**
             * 创建一个界面主题类实例
             * @param {Object} data 主题属性对象
             * @param {string} data.name 主题的名称，同一个扩展中的主题名称不能相同
             * @param {string} data.displayName 主题在界面上显示的名称
             * @param {string} data.color 主题的主色调
             * @param {string} data.style 主题对应的 css 文件
             * @param {string} data.inject 主题的载入方式
             * @param {ThemeExtension} extension 主题所属的扩展
             */
            constructor(data: {name: string, displayName: string, color: string, style: string, inject: string}, extension: ThemeExtension);

            /**
             * 主题的主色调
             * @type {string}
             */
            readonly color: string;

            /**
             * 主题所属的扩展
             * @type {ThemeExtension}
             */
            readonly extension: ThemeExtension;

            /**
             * 主题的名称，同一个扩展中的主题名称不能相同
             * @type {string}
             */
            readonly name: string;

            /**
             * 主题在界面上显示的名称
             * @type {string}
             */
            readonly displayName: string;

            /**
             * 主题名称的拼音形式字符串
             * @type {string}
             * @readonly
             */
            readonly pinyinNames: string;

            /**
             * 主题编号
             * @type {string}
             */
            readonly id: string;

            /**
             * 主题的载入方式，目前支持 `'inject'` 和 `'append'`
             * @type {string}
             */
            readonly inject: string;

            /**
             * 是否为追加载入方式（`append`）
             * @type {boolean}
             */
            readonly isAppend: boolean;

            /**
             * 是否为覆盖载入方式（`override`）
             * @type {boolean}
             */
            readonly isOverride: boolean;

            /**
             * 主题对应的 CSS 样式表文件路径
             * @type {string}
             */
            readonly styleFile: string;

            /**
             * 预览图片地址
             *
             * @readonly
             * @type {string}
             */
            readonly preview: string;

            /**
             * 主题作者（实际为主题所属扩展的作者）
             * @type {string}
             */
            readonly author: string;

            /**
             * 主题发布者（实际为主题所属扩展的发布者）
             * @type {string}
             */
            readonly publisher: string;

            /**
             * 主题关键字（实际为主题所属扩展的关键字）
             * @type {string[]}
             */
            readonly extKeywords: string[];

            /**
             * 主题扩展显示名称
             * @type {string}
             */
            readonly extDisplayName: string;

            /**
             * 主题扩展扩展名称
             * @type {string}
             */
            readonly extName: string;

            /**
             * 主题扩展扩展名称拼音字符串
             * @type {string}
             */
            readonly extPinyinNames: string;

            /**
             * 主题扩展描述
             * @type {string}
             */
            readonly extDescription: string;

            /**
             * 主题与给定的关键字匹配分值
             * @memberof Member
             * @param {string[]} keys 关键字列表
             * @return {number} 匹配的分值
             */
            getMatchScore(keys: string[]): number;
    }

    /**
     * 扩展
     */
    class Extension {
        /**
         * 扩展类型表
         * @type {Map<string, string>}
         * @static
         */
        static TYPES: Object;

        /**
         * 创建一个扩展基础类实例
         * @param {Object} pkgData 扩展的 package.json 文件数据
         * @param {Object} data 扩展的运行时数据
         */
        constructor(pkgData: Object, data: Object);

        /**
         * 从扩展的 package.json 文件数据初始化扩展信息
         * @param {Object} pkgData 扩展的 package.json 文件数据
         * @return {void}
         */
        initPkg(pkgData: Object): void;

        /**
         * 添加一个该扩展的错误信息
         * @param {string} name 错误名称
         * @param {string} error 错误信息
         * @return {void}
         */
        addError(name: string, error: string): void;

        /**
         * 错误信息清单
         * @type {Object[]}
         */
        readonly errors: Object[];

        /**
         * 是否有错误信息
         * @type {boolean}
         */
        readonly hasError: boolean;

        /**
         * 扩展名称的拼音字符串
         * @type {string}
         */
        readonly pinyinNames: string;

        /**
         * 扩展配置数据
         * @type {Object}
         */
        readonly config: Object;

        /**
         * 扩展显示名称
         * @type {string}
         */
        readonly displayName: string;

        /**
         * 扩展类型
         * @type {string}
         */
        readonly type: string;

        /**
         * 内部名称
         * @type {string}
         */
        readonly name: string;

        /**
         * 是否主题类型扩展
         * @type {boolean}
         */
        readonly isTheme: boolean;

        /**
         * 是否插件类型扩展
         * @type {boolean}
         */
        readonly isPlugin: boolean;

        /**
         * 是否是应用类型扩展
         * @type {boolean}
         */
        readonly isApp: boolean;

        /**
         * 是否内置扩展
         * @type {boolean}
         */
        readonly buildIn: boolean;
        /**
         * 扩展内置配置信息
         * @type {{name: string}[]}
         */
        readonly configurations: Object;

        /**
         * 扩展的 package.json 文件数据
         * @type {Object}
         */
        readonly pkg: Object;

        /**
         * 扩展描述信息
         * @type {string}
         */
        readonly description: string;

        /**
         * 扩展版本信息
         * @type {string}
         */
        readonly version: string;

        /**
         * 扩展作者信息
         * @type {{name: string, email: string}}
         */
        readonly author: {name: string, email: string} | string;

        /**
         * 发布者信息
         * @type {{name: string, email: string}}
         */
        readonly publisher: {name: string, email: string} | string;

        /**
         * 扩展版权信息
         * @type {string}
         */
        readonly license: string;

        /**
         * 扩展主页链接
         * @type {string}
         */
        readonly homepage: string;

        /**
         * 扩展关键字清单
         * @type {string[]}
         */
        readonly keywords: string[];

        /**
         * 扩展扩展要求的运行环境
         * @type {{xuanxuan: string, platform: string, extensions: string[]}}
         */
        readonly engines: {xuanxuan: string, platform: string, extensions: string[]};

        /**
         * 版本库信息
         * @type {{type: string, url: string}}
         */
        readonly repository: {type: string, url: string};

        /**
         * 问题反馈地址
         * @type {{url: string}}
         */
        readonly bugs: {url: string};

        /**
         * 扩展是否支持热加载
         * @type {boolean}
         */
        readonly hot: boolean;

        /**
         * 远程免登录入口地址
         * @type {string}
         */
        readonly entryUrl: string;

        /**
         * 远程免登录入口 ID
         * @type {string}
         */
        readonly entryID: string;

        /**
         * 远程免登录入口地址
         *
         * @param {string} [referer=''] 要访问的地址
         * @param {string} [entryID=null] 远程免登录入口 ID
         * @returns {Promise<string>} 使用 Promise 异步返回处理结果
         */
        getEntryUrl(referer?: string, entryID?: string): Promise<string>;

        /**
         * 是否支持远程免登录
         * @type {boolean}
         */
        readonly hasServerEntry: boolean;

        /**
         * 远程额外数据
         * @type {any}
         */
        readonly serverData: any;

        /**
         * 远程扩展下载地址
         * @type {string}
         */
        readonly download: string;

        /**
         * 是否是远程扩展
         * @type {boolean}
         */
        readonly isRemote: boolean;

        /**
         * 当前扩展是否为内置或远程扩展
         *
         * @readonly
         * @type {boolean}
         */
        readonly isBuildInOrRemote: boolean;

        /**
         * 远程扩展是否加载完毕
         * @type {boolean}
         */
        readonly isRemoteLoaded: boolean;

        /**
         * 远程 MD5 值
         * @type {string}
         */
        readonly md5: string;

        /**
         * 扩展所属的用户
         * @type {string}
         */
        readonly user: string;

        /**
         * 远程扩展缓存路径
         * @type {string}
         */
        readonly remoteCachePath: string;

        /**
         * 远程扩展是否加载失败
         * @type {boolean}
         */
        readonly loadRemoteFailed: boolean;

        /**
         * 远程扩展下载进度，百分比，取值范围 0~100
         * @type {number}
         */
        readonly downloadProgress: number;

        /**
         * 设置远程扩展加载结果
         *
         * @param {boolean} result 是否加载失败
         * @param {Error} [error=null] 设置加载失败的错误信息
         * @return {void}
         */
        setLoadRemoteResult(result: boolean, error?: Error): void;

        /**
         * 扩展配色
         * @type {string}
         */
        readonly accentColor: string;

        /**
         * 扩展模块入口文件路径
         * @type {string}
         */
        readonly mainFile: string;

        /**
         * 扩展图标
         * @type {string}
         */
        readonly icon: string;

        /**
         * 通知消息发送者信息配置
         *
         * @readonly
         * @type {Map<String, Object>}
         */
        readonly notificationSenders: Object;

        /**
         * 指定的通知消息发送者信息配置对象
         * @param {Object|string} sender 发送者 ID 或发送者信息对象
         * @return {Object} 发送者信息配置对象
         */
        getNotificationSender(sender: Object | string): Object;

        /**
         * 扩展作者名称
         * @type {string}
         */
        readonly authorName: string;

        /**
         * 扩展存储数据
         * @type {{data: Object, pkg: Object}}
         */
        readonly storeData: {data: Object, pkg: Object};

        /**
         * 扩展运行时数据
         * @type {Object}
         */
        readonly data: Object;

        /**
         * 扩展安装时间（时间戳形式）
         * @type {number}
         */
        readonly installTime: number;

        /**
         * 是否已禁用扩展
         * @type {boolean}
         */
        readonly disabled: boolean;

        /**
         * 扩展是否可用
         * @type {boolean}
         */
        readonly avaliable: boolean;

        /**
         * 扩展上次更新的时间（时间戳）
         * @type {number}
         */
        readonly updateTime: number;

        /**
         * 扩展本地文件路径
         * @type {string}
         */
        readonly localPath: boolean;

        /**
         * 是否为正在开发中的扩展
         * @type {boolean}
         */
        readonly isDev: boolean;

        /**
         * 是否有 JS 模块
         * @type {boolean}
         */
        readonly hasModule: boolean;

        /**
         * 扩展配置项值
         *
         * @param {?string} key 配置名称
         * @return {any} 扩展配置值
         */
        getConfig(key?: string): any;

        /**
         * 设置扩展配置项
         *
         * @param {string|Object} key 配置名称或者配置对象
         * @param {any} value 配置值，如果 `key` 为 `Object` 则忽略此参数
         * @return {void}
         */
        setConfig(key: string | Object, value?: any): void;

        /**
         * 扩展用户配置项值
         *
         * @param {string} key 配置名称
         * @param {any} defualtValue 默认值
         * @return {any} 扩展配置值
         */
        getUserConfig(key: string, defualtValue?: any): any;

        /**
         * 设置扩展用户配置项
         *
         * @param {string|Object} key 配置名称或者配置对象
         * @param {any} value 配置值，如果 `key` 为 `Object` 则忽略此参数
         * @return {void}
         */
        setUserConfig(key: string | Object, value?: any): void;

        /**
         * 重新载入扩展模块
         *
         * @return {any} 扩展模块
         */
        loadModule(): any;

        /**
         * 扩展模块是否已经加载
         * @type {boolean}
         */
        readonly isModuleLoaded: boolean;

        /**
         * 扩展是否需要重新载入才能启用
         * @type {boolean}
         */
        readonly needRestart: boolean;

        /**
         * 加载并启用扩展
         *
         * @return {boolean} 如果为 `true` 表示加载成功，否则表示加载失败
         */
        attach(): boolean;

        /**
         * 热加载并启用扩展
         *
         * @return {boolean} 如果为 `true` 表示加载成功，否则表示加载失败
         */
        hotAttach(): boolean;

        /**
         * 停用并卸载扩展
         *
         * @return {void}
         */
        detach(): void;

        /**
         * 是否拥有 React 视图替换组件
         * @type {boolean}
         */
        readonly hasReplaceViews: boolean;

        /**
         *  React 视图替换组件清单
         * @type {Map<string, Class<Component>>}
         */
        readonly replaceViews: Object;

        /**
         * 上次加载此扩展所花费的时间，单位为毫秒
         * @type {number}
         */
        readonly loadTime: number;

        /**
         * 加载后的扩展模块
         * @type {any}
         */
        readonly module: any;

        /**
         * 调用扩展模块方法
         *
         * @param {string} methodName 方法名称
         * @param {...any} params 方法参数
         * @return {any} 如果返回所调用的方法返回值
         */
        callModuleMethod(methodName: string, ...params: any[]): any;

        /**
         * 扩展支持的命令
         * @type {Map<string, any>}
         */
        readonly commands: Object;

        /**
         * 指定名称的扩展命令
         *
         * @param {string} commandName 命令名称
         * @return {any} 扩展命令
         */
        getCommand(commandName: string): any;

        /**
         * 网址解析器
         *
         * @param {string} url 要解析的网址
         * @param {string} [type='inspect'] 解析类型，包括 `'inspect'` 和 `'open'`
         * @return {any} 网址解析器对象
         */
        getUrlInspector(url: string, type?: string): any;


        /**
         * 网址打开处理器
         *
         * @param {string} url 要打开的网址
         * @return {any} 网址打开处理器对象
         */
        getUrlOpener(url: string): any;

        /**
         * 格式化上下文菜单条目
         *
         * @param {Object} menuItem 要格式化的上下文菜单条目
         * @param {Object} urlFormatObject 网址格式化对象
         * @return {Object} 上下文菜单条目
         */
        formatContextMenuItem(menuItem: Object, urlFormatObject: Object): Object;

        /**
         * 上下文菜单生成器
         *
         * @return {Object[]} 上下文菜单生成器列表
         */
        getContextMenuCreators(): Object[];

        /**
         * 扩展与给定的关键字匹配分值
         * @param {string[]} keys 关键字列表
         * @return {number} 匹配的分值
         */
        getMatchScore(keys: string[]): number;

        /**
         * 保存扩展自定义数据
         * @return {void}
         */
        saveData(): void;
    }

    /**
     * 应用扩展
     */
    class AppExtension extends Extension {
        /**
         * 创建一个应用扩展类实例
         * @param {Object} pkg 扩展的 package.json 文件数据
         * @param {Object} data 扩展的运行时数据
         */
        constructor(pkg: Object, data: Object);

        /**
         * 应用类型是否是内嵌网页应用
         * @type {boolean}
         */
        readonly isWebview: boolean;

        /**
         * 应用类型
         * @type {string}
         */
        readonly appType: string;

        /**
         * 内嵌网页应用地址
         * @type {string}
         */
        readonly webViewUrl: string;

        /**
         * 应用的免登录地址
         * @param {string} referer 要访问的地址，如果留空使用应用主页地址
         * @param {string} entryID 入口 ID，如果留空使用应用的 ID
         * @returns {Promise} 使用 Promise 异步返回处理结果
         */
        getEntryUrl(referer?: string, entryID?: string): Promise<string>;

        /**
         * 内嵌网页预加载脚本
         * @type {string}
         */
        readonly webViewPreloadScript: string;

        /**
         * 内嵌网页注入 CSS
         * @type {string}
         */
        readonly injectCSS: string;

        /**
         * 内嵌网页注入脚本
         * @type {string}
         */
        readonly injectScript: string;

        /**
         * 是否是本地内嵌网页
         * @type {boolean}
         */
        readonly isLocalWebView: boolean;

        /**
         * 应用配色
         * @type {string}
         */
        readonly appAccentColor: string;

        /**
         * 应用背景色
         * @type {string}
         */
        readonly appBackColor: string;

        /**
         * 应用图标
         * @type {string}
         */
        readonly appIcon: string;

        /**
         * 应用在菜单上显示的图标
         * @type {string}
         */
        readonly menuIcon: string;

        /**
         * 扩展图标
         * @type {string}
         */
        readonly icon: string;

        /**
         * 扩展配色
         * @type {string}
         */
        readonly accentColor: string;

        /**
         * 应用内部视图入口组件
         * @type {Class<Component>}
         */
        readonly MainView: typeof React.Component;

        /**
         * 是否为内置应用
         * @type {boolean}
         */
        readonly buildIn: boolean;

        /**
         * 是否是默认应用
         * @type {boolean}
         */
        readonly isDefault: boolean;

        /**
         * 是否是固定显示的应用
         * @type {boolean}
         */
        readonly isFixed: boolean;

        /**
         * 是否允许用户将应用图标固定在窗口菜单上
         * @type {boolean}
         */
        readonly canPinnedOnMenu: boolean;

        /**
         * 应用图标在导航上显示的顺序
         *
         * @readonly
         * @type {number}
         */
        readonly pinnedOnMenuOrder: number;

        /**
         * 应用图标是否能够固定在窗口菜单上
         * @type {boolean}
         */
        readonly pinnedOnMenu: boolean;
    }

    /**
     * 插件扩展
     */
    class PluginExtension extends Extension {
        /**
         * 创建一个插件扩展类实例
         * @param {Object} pkg 扩展的 package.json 文件数据
         * @param {Object} data 扩展的运行时数据
         */
        constructor(pkg: Object, data: Object);
    }

    /**
     * 主题扩展
     */
    class ThemeExtension extends Extension {
        /**
         * 创建一个主题扩展类实例
         * @param {Object} pkg 扩展的 package.json 文件数据
         * @param {Object} data 扩展的运行时数据
         */
        constructor(pkg: Object, data: Object);

        /**
         * 主题扩展中定义的所有主题
         * @type {Theme[]}
         */
        readonly themes: Theme[];

        /**
         * 根据主题名称获取主题对象
         *
         * @param {string} name 主题名称
         * @return {Theme} 主题对象
         */
        getTheme(name: string): Theme;
    }
}

/**
 * 全局扩展模块
 */
interface Xext {
    /**
     * 语言管理模块
     */
    lang: Xuanxuan.Lang;

    /**
     * 依赖模块
     */
    nodeModules: Xuanxuan.NodeModules;

    /**
     * 通用组件库
     */
    components: Xuanxuan.Components;

    /**
     * 通用工具模块
     */
    utils: Xuanxuan.Utils;

    /**
     * 平台访问模块
     */
    platform: Xuanxuan.Platform;

    /**
     * 应用核心模块
     */
    app: Xuanxuan.App;

    /**
     * 界面视图库
     */
    views: Xuanxuan.Views;
}

/**
 * 如果为 true，表示当前代码运行为调试模式，否则为正常模式
 * @type {boolean}
 */
declare const DEBUG: boolean;
