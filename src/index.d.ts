import type { } from '@octokit/rest';

export declare type AutoGreenOptions = {
    /** 用户名或者组织名 */
    owner: string,
    /** 仓库 */
    repo: string,
    /** 分支，默认为 main */
    branch?: string,
    /** GitHub 验证 token */
    auth?: string,
    /** 是否开启调试模式，默认不开启 */
    debug?: boolean;
}

/**
 * 自动保持 GitHub 提交状态常绿
 * 
 * a commit every day, keep your girlfriend far away.
 */
declare const _default: (options?: AutoGreenOptions) => Promise<void>;

export = _default;
